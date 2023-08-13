import request from "supertest";
import { Express } from "express";
import { streamyardCloneAPIServer } from "../src/index"; // Import your Express server

describe("StreamyardCloneAPI Server", () => {
  let app: Express;

  beforeAll(() => {
    app = streamyardCloneAPIServer;
  });

  it('responds with "StreamyardCloneAPI server heathly" on /health', async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.text).toBe("StreamyardCloneAPI server heathly");
  });
});
