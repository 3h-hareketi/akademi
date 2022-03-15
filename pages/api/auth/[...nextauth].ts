import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FaunaAdapter } from "@next-auth/fauna-adapter";
import { client } from "../../../lib/faunaClient";

export default NextAuth({
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
});
