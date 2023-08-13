import express from "express";

export const liveStreamRouter = express();
liveStreamRouter.get("/", (req, res) => {
  res.send("liveStream Routes");
});
