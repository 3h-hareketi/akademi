import { Client } from "faunadb";

export const client = new Client({
  secret: process.env.FAUNA_SECRET!,
  scheme: "https",
  domain: process.env.FAUNA_DOMAIN! || "db.fauna.com",
  port: parseInt(process.env.FAUNA_PORT || "443"),
});
