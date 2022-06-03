import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { FaunaAdapter } from "@next-auth/fauna-adapter";
import nodemailer from "nodemailer";
import { html, text } from "../../../lib/email/sendVerification";
import { Logger } from "tslog";
import { client } from "../../../lib/faunaClient";
import { withSentry } from "@sentry/nextjs";

const log: Logger = new Logger({ name: "pages/api/auth/[...nextauth].ts" });

const handler = NextAuth({
  debug: process.env.NODE_ENV !== "production" ? false : true,
  secret: process.env.NEXTAUTH_SECRET,
  adapter: FaunaAdapter(client),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || "587"),
        auth: {
          user: process.env.MAILJET_API_KEY,
          pass: process.env.MAILJET_API_SECRET,
        },
      },
      from: process.env.EMAIL_FROM || "3H Akademi <noreply@3hhareketi.org>",
      async sendVerificationRequest({
        identifier: email,
        url,
        provider: { server, from },
      }) {
        const { host } = new URL(url);
        const transport = nodemailer.createTransport(server);

        await transport.sendMail({
          to: email,
          from,
          subject: `${host}'e Giriş Yap`,
          text: text({ url, host }),
          html: html({ url, host, email }),
        });
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/giris",
    verifyRequest: "/giris-onay",
  },
  logger: {
    debug(code, metadata) {
      log.debug(code, metadata);
    },
  },
  useSecureCookies: process.env.NODE_ENV === "production" ? true : false,
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.id = user.id;

      return session;
    },
  },
});

export default withSentry(handler);
