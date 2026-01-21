// app/actions/posts.js
"use server";

import dbConnect from "@/lib/db";

import Post from "@/models/Post";
import { revalidatePath } from "next/cache";

export async function createPostAction(formData) {
  await dbConnect();

  const title = formData.get("title");
  const content = formData.get("content"); // The Lexical JSON string
  const coverImage = formData.get("coverImage");

  const newPost = await Post.create({
    title,
    content,
    coverImage:
      coverImage ||
      "https://www.shutterstock.com/image-vector/600-followers-celebration-thank-you-260nw-2504393891.jpg",
  });

  // This tells Next.js to refresh the Master Page to show the new post
  revalidatePath("/");

  return { success: true, id: newPost._id.toString() };
}
