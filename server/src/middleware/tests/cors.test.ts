import { NextFunction, Request, Response } from "express";
import { cors } from "../cors";

describe("Cors middleware", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  const nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      set: jest.fn(),
    };
  });

  test("add cors Hearder", async () => {
    cors(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.set).toBeCalledWith("Access-Control-Allow-Origin", "*");
    expect(mockResponse.set).toBeCalledWith(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,DELETE,OPTIONS"
    );
  });
});
