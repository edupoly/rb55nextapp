import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
async function dbConnect() {
  try {
    mongoose.connect(MONGODB_URI!);
  } catch (e) {
    throw e;
  }
}
export default dbConnect;
