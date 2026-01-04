"use server";

import { signOut } from "@/auth"; // Import from your central auth configuration

export async function handleLogout() {
  await signOut({ redirectTo: "/login" });
}
