import express, { Express, Request, Response } from "express";

const restAPIPort = 3000;

const streamyardCloneAPIServer: Express = express();

streamyardCloneAPIServer.get("/", (req: Request, res: Response) => {
  res.send("StreamyardCloneAPI server");
});

streamyardCloneAPIServer.listen(restAPIPort, () => {
  console.log(
    `[server]: StreamyardCloneAPI server is running at port: ${restAPIPort}`
  );
});
