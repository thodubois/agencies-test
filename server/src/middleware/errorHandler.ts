import { Request, Response } from "express";

export const errorHandler = (req: Request, res: Response): void => {
  res.status(404);
  res.end();
};
