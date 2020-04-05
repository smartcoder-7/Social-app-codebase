import { GraphQLDateTime, GraphQLDate } from "graphql-iso-date"
import GraphQLJSON from 'graphql-type-json';
import { UserResolver } from "../resolvers/userResolver";
import { GQLResolver } from "../types/types";

export const GQL_RESOLVERS: GQLResolver[] = [
  UserResolver
];

export const GQL_SCALAR_RESOLVERS = {
  DateTime: GraphQLDateTime,
  Date: GraphQLDate,
  JSON: GraphQLJSON
}