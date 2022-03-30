import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { FaunaAdapter } from "@next-auth/fauna-adapter";
import { Logger } from "tslog";
import { client } from "../../../lib/faunaClient";

const log: Logger = new Logger({ name: "pages/api/auth/[...nextauth].ts" });

export default NextAuth({
  debug: process.env.NODE_ENV !== "production" ? false : true,
  secret: process.env.NEXTAUTH_SECRET,
  adapter: FaunaAdapter(client),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM || "noreply@3hhareketi.org",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/giris",
  },
  logger: {
    debug(code, metadata) {
      process.env.NODE_ENV !== "production" ? log.debug(code, metadata) : null;
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
