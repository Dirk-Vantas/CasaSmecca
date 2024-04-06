"use server";
import { authOptions } from "./auth";
import { getServerSession } from "next-auth";
import { User } from "@prisma/client";

export const authorizeUser = async (): Promise<User | null> => {
  const serverSession = await getServerSession(authOptions);
  if (serverSession && serverSession.user) {
    return serverSession.user;
  }

  return null;
};
