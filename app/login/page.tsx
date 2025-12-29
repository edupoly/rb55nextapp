"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // This sends the credentials to the 'authorize' function 
    // we defined in our NextAuth configuration
    const res = await signIn("credentials", {
      emailId,
      password,
      redirect: true,
      callbackUrl: "/dashboard", 
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="emailId" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value="hello123" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}