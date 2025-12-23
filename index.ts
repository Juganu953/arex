import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok", message: "AREX backend running" });
});

app.get("/db-check", async (req: Request, res: Response) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ ok: true });
  } catch (error: any) {
    res.status(500).json({ ok: false, error: error.message });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("AREX Backend API is live");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`AREX backend running on port ${PORT}`);
});
