import { rule, shield, IRules, allow } from 'graphql-shield'
import { IResolvers } from '../types/gqlTypings.generated';
import { ApolloContext } from '../types/types';
import { isProdEnviroment } from '../shared/utilities';

const isAuthenticated = rule()(async (_parent, _args, ctx: ApolloContext, _info) => {
  return ctx.currentUser !== undefined
});

const isAdmin = rule()(async (parent, args, { isCurrentUserAdmin }: ApolloContext, _info) => {
  return isCurrentUserAdmin === true;
});

const rules: IResolvers = {
  Query: {
    me: isAuthenticated as any,
    users: isAdmin as any
  },
  Mutation: {
    createUser: allow as any,
    login: allow as any
  },
};

// Hack coersion
export default shield(
  rules as IRules,
  {
    fallbackRule: isAuthenticated,
    debug: !isProdEnviroment()
  },
);