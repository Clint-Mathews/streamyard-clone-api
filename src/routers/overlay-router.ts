import express from "express";

export const overLayRouter = express();
overLayRouter.get("/", (req, res) => {
  res.send("OverLay Routes");
});
