import * as log from "loglevel";
import { withPrefix } from "./utils";
import { LOG_LEVEL } from "../config";

const logger = withPrefix(log, "scene", "scene", LOG_LEVEL);
// logger.error("ERROR");
// logger.warn("WARN");
// logger.info("INFO");
// logger.debug("DEBUG");
// logger.trace("TRACE");

export default logger;
