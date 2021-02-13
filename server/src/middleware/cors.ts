import { Request, Response, NextFunction } from "express";

export function cors(req: Request, res: Response, next: NextFunction): void {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
}
