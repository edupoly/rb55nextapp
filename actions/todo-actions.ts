"use server";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Todo from "@/models/Todo";
import { redirect } from "next/navigation";
import getServerSession from "next-auth"; // Or your auth provider

export async function GET() {
  await dbConnect();
  // 1. Get current logged-in user session
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  // 2. Fetch only todos belonging to this user
  const todos = await Todo.find({ userId: session.user.id });
  return NextResponse.json(todos);
}

export async function POST(req) {
  await dbConnect();
  const session = await getServerSession();
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

// export async function getAllStudents() {
//   await dbConnect();
//   const students = await Student.find({});
//   return JSON.stringify(students);
// }

// export async function addNewStudent(newStudent) {
//   await dbConnect();
//   await Student.create({ ...newStudent });
//   redirect("/students");
// }
