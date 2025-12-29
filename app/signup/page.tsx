"use client";

import { signup } from "@/actions/todo-actions"
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);

  // Client-side wrapper to handle the response from the Server Action
  async function clientAction(formData: FormData) {
    const result = await signup(formData);
    if (result?.error) {
      setError(result.error);
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      <form action={clientAction} className="flex flex-col gap-4 p-8 border rounded shadow-lg w-80">
        <h1 className="text-xl font-bold">Sign Up</h1>

        {error && <p className="text-red-500 text-sm italic">{error}</p>}

        <input 
          name="emailId" 
          type="email" 
          placeholder="emailId" 
          required 
          defaultValue="praveengclasses@gmail.com"
          className="p-2 border rounded text-black" 
        />
        
        <input 
          name="password" 
          type="password" 
          placeholder="Password" 
          required 
          defaultValue="hello123"
          className="p-2 border rounded text-black" 
        />

        <button 
          type="submit" 
          className="bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
        >
          Create Account
        </button>

        <p className="text-xs text-center">
          Already have an account? <Link href="/login" className="underline">Login</Link>
        </p>
      </form>
    </main>
  );
}