import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import todoRouter from "./routes/todoRoute";
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todo", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}!`);
});
