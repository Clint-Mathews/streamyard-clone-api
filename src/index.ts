import express, { Express, Request, Response } from "express";
import { userRouter } from "./routers/user-router";
import { overLayRouter } from "./routers/overlay-router";
import { liveStreamRouter } from "./routers/live-stream-router";

const restAPIPort = 3000;

export const streamyardCloneAPIServer: Express = express();

streamyardCloneAPIServer.get("/health", (req: Request, res: Response) => {
  res.send("StreamyardCloneAPI server heathly");
});

streamyardCloneAPIServer.use("/user", userRouter);
streamyardCloneAPIServer.use("/overlay", overLayRouter);
streamyardCloneAPIServer.use("/live-stream", liveStreamRouter);

const listenstreamyardCloneAPIServer = streamyardCloneAPIServer.listen(
  restAPIPort,
  () => {
    console.log(
      `[server]: StreamyardCloneAPI server is running at port: ${restAPIPort}`
    );
  }
);

export function closeStreamyardCloneAPIServer() {
  listenstreamyardCloneAPIServer.close();
  console.log("[server]: StreamyardCloneAPI server closed.");
}

process.on("SIGINT", () => closeStreamyardCloneAPIServer());
