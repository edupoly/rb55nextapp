import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
async function dbConnect() {
  try {
    await mongoose.connect(MONGODB_URI!);
    console.log("mongodb connected");
  } catch (e) {
    throw e;
  }
}
export default dbConnect;
