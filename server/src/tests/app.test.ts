import app from "../app";
import { base } from "../base";
import supertest from "supertest";

const request = supertest(app);

describe("App", () => {
  describe("GET /api/agency", () => {
    test("respond with a status 200 and agencies", (done) => {
      request.get("/api/agency").expect(200, base.agencies).end(done);
    });
  });

  describe("GET /unknown", () => {
    test("respond with a status 404", (done) => {
      request.get("/unknown").expect(404).end(done);
    });
  });
});
