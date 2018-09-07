import * as log from "loglevel";
import { withLabel } from "./utils";
import { LOG_LEVEL } from "../config";

export const componentLogger = withLabel(
  log,
  "component",
  "component",
  LOG_LEVEL
);

export const sceneLogger = withLabel(log, "scene", "scene", LOG_LEVEL);

export const serviceLogger = withLabel(log, "service", "service", LOG_LEVEL);
