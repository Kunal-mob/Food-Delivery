import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kunalsingh989107:cUdipTsKEW27k6qs@tomato.cj3aw0f.mongodb.net/Food-del",
  ).then(()=>{console.log("Connected to MongoDB")});
};
