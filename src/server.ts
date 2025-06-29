import express from "express";
import { client } from "./configs/db";
import userRoutes from "./routes/userRoutes";
import cors from "cors";

const app = express();
const port: number = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
client.connect();

app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
