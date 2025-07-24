import { Router } from "express";

const manualRouter = Router();

manualRouter.post("/manual", (req, res) => {
  // Handle manual route logic here
  res.send("Manual route accessed");
});

export default manualRouter;