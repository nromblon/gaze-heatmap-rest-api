import Router from "express";

const gazemapRouter = Router();

gazemapRouter.post("/gazemap", (req, res) => {
  // Handle gazemap route logic here
  res.send("Gazemap route accessed");
});

export default gazemapRouter;