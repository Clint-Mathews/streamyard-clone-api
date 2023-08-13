import * as dotenv from "dotenv";
import * as path from "path";

const envFilePath = path.resolve(__dirname, ".env");
dotenv.config({ path: envFilePath });

function required(data: string | undefined) {
  if (!data) {
    console.log("Missing StreamyardCloneAPI required envs.");
    console.log("Shutting StreamyardCloneAPI server down...");
    process.exit(0);
  }
}

export const environment = {
  restAPIPort: Number(required(process.env.REST_API_PORT)),
};
