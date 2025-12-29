"use server";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Todo from "@/models/Todo";
import { redirect } from "next/navigation";
import getServerSession from "next-auth"; // Or your auth provider

import Student from "@/models/Student";

import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function signup(formData: FormData) {
  const emailId = formData.get("emailId") as string;
  const password = formData.get("password") as string;

  // 1. Validate inputs
  if (!emailId || !password || password.length < 6) {
    return { error: "Invalid details. Password must be 6+ characters." };
  }

  try {
    await dbConnect();

    // 2. Check if user exists
    const existingUser = await User.findOne({ emailId });
    if (existingUser) {
      return { error: "User already exists with this email." };
    }

    // 3. Hash and Save
    const hashedPassword = await bcrypt.hash(password, 12);
    await User.create({
      emailId,
      password: hashedPassword,
      username: emailId,
      role: "user",
      phoneNumber: "0000",
    });
  } catch (err) {
    console.error(err);
    return { error: "Database error. Please try again." };
  }

  // 4. Redirect to login on success
  // (Redirect must be called outside the try/catch block)
  redirect("/login");
}

export async function addMyTodo(req) {
  await dbConnect();
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { title } = await req.json();
  // 3. Save new todo with the current user's ID
  const newTodo = await Todo.create({
    title,
    userId: session.user.id,
  });
  return NextResponse.json(newTodo);
}

export async function getMyTodos() {
  await dbConnect();
  // 1. Get current logged-in user session
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  // 2. Fetch only todos belonging to this user
  const todos = await Todo.find({ userId: session.user.id });
  return NextResponse.json(todos);
}

export async function getAllStudents() {
  await dbConnect();
  const students = await Student.find({});
  return JSON.stringify(students);
}

// export async function addNewStudent(newStudent) {
//   await dbConnect();
//   await Student.create({ ...newStudent });
//   redirect("/students");
// }
