const request = require("supertest");
const app = require("../../src/server");

describe("Sweets API", () => {
  it("should return all sweets", async () => {
    const res = await request(app).get("/api/sweets");
    expect(res.statusCode).toBe(200);
  });
});
