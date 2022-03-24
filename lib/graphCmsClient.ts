import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT!);
