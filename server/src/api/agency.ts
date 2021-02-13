import { Request, Response } from "express";
import { base } from "../base";

export const getAgencies = (req: Request, res: Response): void => {
  const { agencies } = base;
  res.status(200);
  res.json(agencies);
};
