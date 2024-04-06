import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";
import { User } from "@prisma/client";
import prisma from "@/app/lib/prisma";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Your Username",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.username,
          },
        });

        if (!user) throw new Error("Username or password is not correct");

        if (!credentials?.password)
          throw new Error("Please provide your Password");
        const isPassowrdCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPassowrdCorrect)
          throw new Error("Username or password is not correct");
        const { password, ...userWithoutPass } = user;
        return userWithoutPass;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update" && session) {
        try {
          token.user.name = session.firstname;
          token.user.name = session.lastname;
        } catch (e) {}
      }
      if (user) {
        token.user = user as User;
      }
      return token;
    },
    async session({ token, session }) {
      session.user = token.user;
      return session;
    },
  },
};
