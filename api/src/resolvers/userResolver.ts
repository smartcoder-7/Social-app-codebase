import { GQLResolver } from "../types/types";
import { UserModel } from "../models/UserModel";

export const UserResolver: GQLResolver = {
  resolvers: {
    Query: {
      me: (_, _1, ctx) => ctx.currentUser,
      users: () => UserModel.query()
    },
    Mutation: {
      login: async (_, { email, password }, ctx) => {
        const user = await UserModel.verifyPassword(email, password);
        if (!user) throw new Error('User DNE or incorrect password');
        ctx.currentUser = user;
        return user;
      },
      createUser: async (_, { userInput }) => UserModel.create(userInput)
    },
    User: {
      admin: (user, _, { isCurrentUserAdmin }) => isCurrentUserAdmin && user.admin,
      fullName: user => `${user.firstName} ${user.lastName}`,
    },
  },
}