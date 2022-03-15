import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FaunaAdapter } from "@next-auth/fauna-adapter";
import { Logger } from "tslog";
import { client } from "../../../lib/faunaClient";

const log: Logger = new Logger({ name: "pages/api/auth/[...nextauth].ts" });

export default NextAuth({
  debug: process.env.NODE_ENV !== "production" ? false : true,
  adapter: FaunaAdapter(client),
  providers: [
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
});
