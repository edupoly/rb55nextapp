import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  emailId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "user" },
  phoneNumber: { type: String },
  username: { type: String },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
