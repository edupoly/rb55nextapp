// models/Post.js
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  coverImage: { type: String }, // URL to image
  content: { type: String, required: true }, // Lexical JSON string
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
