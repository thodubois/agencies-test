import { Request, Response } from "express";
import { errorHandler } from "../errorHandler";

describe("errorHandler middleware", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn(),
      end: jest.fn(),
    };
  });

  test("return error 404", () => {
    errorHandler(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toBeCalledWith(404);
    expect(mockResponse.end).toBeCalled();
  });
});
