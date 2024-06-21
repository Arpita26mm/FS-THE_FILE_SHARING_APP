//general template used everywhere
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); //means ab aap app m dotenv ko use kr skte ho using "process.env.key_name"

//const URI = mongodb+srv://arpitasinghjdp:hIBJK2q70j5XdINc@cluster0.mmztzaq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// pswd = hIBJK2q70j5XdINc
//db name  =

const DBConnection = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected Successfully");
  } catch (error) {
    console.log("Error while connecting with database", error.message);
  }
};

export default DBConnection;
