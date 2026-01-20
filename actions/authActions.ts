"use server";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export async function getSessionDetails() {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }
  return session;
}

export async function getUserDetails() {
  const session = await auth();
  return session ? session.user : null;
}

export async function handleLogout() {
  await signOut({ redirectTo: "/" });
}
