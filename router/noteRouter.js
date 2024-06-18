import { add } from "../controllers/add.js";
import { get } from "../controllers/get.js";
import express from "express";

const noteRouter = express.Router();
noteRouter.get("/get-note/:id", get);
noteRouter.post("/add-note", add);

export default noteRouter;
