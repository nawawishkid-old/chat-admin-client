/**
 * Logger with prefix label
 *
 * @param {Log} log loglevel's log variable
 * @param {String} name Name of new loglevel instance
 * @param {String} label Log message label
 * @param {Number} level Log level
 * @returns {Log}s
 */
export const withLabel = (log, name, label, level) => {
  const logger = log.getLogger(name);
  const originalFactory = logger.methodFactory;

  logger.setLevel(level);

  logger.methodFactory = (methodName, logLevel, loggerName) => {
    const rawMethod = originalFactory(methodName, logLevel, loggerName);

    return message => {
      rawMethod(`[${label}] ${message}`);
    };
  };

  logger.setLevel(logger.getLevel());

  return logger;
};
