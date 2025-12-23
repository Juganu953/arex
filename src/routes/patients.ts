import { Router } from "express";

const router = Router();

// Temporary sample data
const patients = [
  { id: 1, name: "John Doe", age: 32 },
  { id: 2, name: "Mary Wanjiku", age: 45 }
];

router.get("/", (req, res) => {
  res.json(patients);
});

export default router;
