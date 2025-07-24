import { Router } from "express";
import manualRouter from "./manual/manualRouter.js";
import gazemapRouter from "./gazemap/gazemapRouter.js";

const router = Router();

router.use(manualRouter);
router.use(gazemapRouter);
router.use((req, res) => {
  res.status(404).send("Route not found");
});

export default router;