import express from "express";
import { getAgencies } from "./api/agency";
import { errorHandler } from "./middleware/errorHandler";
import { cors } from "./middleware/cors";

const app = express();

// Configs
// Enable strict routing to avoid `/agency` and `/agency/` being treated the
// same, enable case sensitive routing to avoid `/agency` and `/AGENCY`
// being treated the same, and disable express' header as well as the ETag
// functionality because they’re irrelevant.
app.enable("strict routing");
app.enable("case sensitive routing");
app.disable("x-powered-by");

// Add cors header
app.use(cors);

// Routes
app.get("/api/agency", getAgencies);

// Middlewares -- After request
app.use(errorHandler);

export default app;
