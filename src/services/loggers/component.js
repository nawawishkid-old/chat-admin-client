import * as log from "loglevel";
import { LOG_LEVEL } from "../config";

const logger = log.getLogger("component");

logger.setLevel(LOG_LEVEL);

var originalFactory = logger.methodFactory;
logger.methodFactory = function(methodName, logLevel, loggerName) {
  var rawMethod = originalFactory(methodName, logLevel, loggerName);

  return function(message) {
    rawMethod("[component]: " + message);
  };
};
logger.setLevel(logger.getLevel());

// logger.error("ERROR");
// logger.warn("WARN");
// logger.info("INFO");
// logger.debug("DEBUG");
// logger.trace("TRACE");

export default logger;
