import express from "express";
import { addFood, removefood } from "../controllers/foodcontroller.js";
import multer from "multer";
import { listfood } from "../controllers/foodcontroller.js";

const foodRouter = express.Router();

//Image storage engine
const storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage});

foodRouter.post('/add', upload.single('image'), addFood);
foodRouter.get('/list', listfood);
foodRouter.post('/remove', removefood);

export default foodRouter;