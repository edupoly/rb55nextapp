"use server";

import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

// import { auth, signOut } from "@/auth"; // Import from your central auth configuration

export async function getSessionDetails() {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return session;
}
export async function getUserDetails() {
  const session = await getServerSession();
  return session ? session.user : null;
}
export async function handleLogout() {
  await signOut({ redirectTo: "/login" });
}
