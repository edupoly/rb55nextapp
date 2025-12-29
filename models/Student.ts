import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please enter fullname"],
  },
  lastname: {
    type: String,
    required: [true, "Please enter fullname"],
  },
  gender: String,
  age: {
    type: Number,
    required: true,
    default: 0,
  },
});

// This line is crucial:
// It prevents Mongoose from recompiling the model every time
// in a serverless environment (which causes errors).

export default mongoose.models.Student ||
  mongoose.model("Student", studentSchema);
