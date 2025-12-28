"use server";

import dbConnect from "@/lib/db";
import Student from "@/models/Student";
import { redirect } from "next/navigation";

export async function getAllStudents() {
  await dbConnect();
  const students = await Student.find({});
  return JSON.stringify(students);
}

export async function addNewStudent(newStudent) {
  await dbConnect();
  await Student.create({ ...newStudent });
  redirect("/students");
}
