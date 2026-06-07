import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodroute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

//app configuration
const app = express();
const PORT = 4000;

//middlewares
app.use(express.json());
app.use(cors());

//database connection
connectDB();

//api endpoints
app.use("/images", express.static("uploads")); //to access images from uploads folder;
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

//routes
app.get("/", (req, res) => {
  res.send("api sahi chal rahi hai");
});

//server connection
app.listen(PORT, () => {
  console.log("server is working good");
});
