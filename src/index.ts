import express, { Request, Response } from "express";
import patientsRoute from "./routes/patients";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// Register routes
app.use("/patients", patientsRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("AREX Backend API is live");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
