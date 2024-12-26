import NextAuth from "next-auth";
import Facebook from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Facebook,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      // TODO:run auth sign api call here
      // authorize: async (credentials) => {
      //
      // },
    }),
  ],
});
