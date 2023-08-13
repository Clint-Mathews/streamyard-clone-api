import * as http from "http";
import { environment } from "./config/environment";

const restAPIPort = 3000;
const streamyardCloneAPIServer = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.write("Hello World!");
    res.end();
  }
);

streamyardCloneAPIServer.listen(restAPIPort, () => {
  console.log(`StreamyardCloneAPI server running on port ${restAPIPort}.`);
});

process.on("SIGINT", () => {
  console.log("Shutting StreamyardCloneAPI server down...");
  streamyardCloneAPIServer.close(() => {
    console.log("StreamyardCloneAPI server closed.");
    process.exit(0);
  });
});
