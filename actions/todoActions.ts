"use server";
import Todo from "@/models/Todo";
import dbConnect from "@/lib/db";
import { redirect } from "next/navigation";
import { getSessionDetails } from "./authActions";

export async function getAllTodos() {
  await dbConnect();
  const allTodos = await Todo.find();
  return JSON.stringify(allTodos);
}
export async function getMyTodos() {
  const { user } = await getSessionDetails();
  await dbConnect();
  const myTodos = await Todo.find({ emailId: user?.email });
  return JSON.stringify(myTodos);
}
export async function addTodo(todo) {
  await dbConnect();
  await Todo.create({ ...todo });
  redirect("/todos");
}

export async function deleteTodo(id) {
  await dbConnect();
  await Todo.findByIdAndDelete(id);
  redirect("/todos");
}

export async function updateTodo(todo) {
  await dbConnect();
  await Todo.findByIdAndUpdate(todo._id, todo);
  redirect("/todos");
}
