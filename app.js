import express from "express";
import noteRouter from "./router/noteRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";

export const app = express();
app.use(express.json());
app.use("/api", noteRouter);

app.use(errorHandler);

app.listen(8080, () => console.log("hey i'm 8kPort"));
