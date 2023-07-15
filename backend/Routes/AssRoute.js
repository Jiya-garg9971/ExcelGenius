import express from "express";
import protect from "../errorhandler/authentication.js";
import { deleteToDo, getToDo, saveToDo, updateToDo } from "../controller/AssController.js";

const AssRoute = express.Router();
AssRoute.get("/", protect,getToDo);
AssRoute.post("/save",protect, saveToDo);
AssRoute.post("/update", protect,updateToDo);
AssRoute.post("/delete", protect,deleteToDo);


export default AssRoute;

