"use server";

import { auth, signOut } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

// import { auth, signOut } from "@/auth"; // Import from your central auth configuration

export async function getSessionDetails() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return session;
}
export async function getUserDetails() {
  const session = await auth();
  return session ? session.user : null;
}
export async function handleLogout() {
  await signOut({ redirectTo: "/login" });
}
