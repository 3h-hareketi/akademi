import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(process.env.FAUNA_ENDPOINT!);
