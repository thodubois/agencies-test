import { Request, Response } from "express";
import { getAgencies } from "../agency";
import { base } from "../../base";

describe("api agencies", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
      status: jest.fn(),
    };
  });

  test("add cors Hearder", async () => {
    getAgencies(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toBeCalledWith(200);
    expect(mockResponse.json).toBeCalledWith(base.agencies);
  });
});
