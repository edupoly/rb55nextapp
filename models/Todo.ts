import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter title"],
  },
  status: String,
});

// This line is crucial:
// It prevents Mongoose from recompiling the model every time
// in a serverless environment (which causes errors).

export default mongoose.models.Todo || mongoose.model("Todo", todoSchema);
