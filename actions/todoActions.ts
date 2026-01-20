"use server";
import Todo from "@/models/Todo";
import dbConnect from "@/lib/db";
import { redirect } from "next/navigation";
import { getUserDetails } from "./authActions";

export async function getAllTodos() {
  await dbConnect();
  let allTodos = await Todo.find();
  return JSON.stringify(allTodos);
}

export async function getUserTodos() {
  await dbConnect();
  const user = await getUserDetails();
  console.log("user in todoActions", user);
  const allTodos = await Todo.find({ emailId: user.email });
  return JSON.stringify(allTodos);
}

export async function addTodo(todo) {
  await dbConnect();
  const user = await getUserDetails();
  const ntd = { ...todo, emailId: user?.email };
  console.log("ntd", ntd);
  await Todo.create({ ...ntd });
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
