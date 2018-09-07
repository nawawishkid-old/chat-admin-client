export const ACCESS_TOKEN_API_PATH = "http://localhost:11112/auth/token";
export const REFRESH_TOKEN_API_PATH = "http://localhost:11112/auth/refresh";
export const LOCAL_STORAGE_ACCESS_TOKEN_NAME = "accessToken";
export const LOCAL_STORAGE_ACCESS_TOKEN_PAYLOAD_NAME = "accessTokenPayload";

/**
 * trace,
 * debug,
 * info,
 * warn,
 * error
 */
const LOG_ERROR = 4;
const LOG_WARN = 3;
const LOG_INFO = 2;
const LOG_DEBUG = 1;
const LOG_TRACE = 0;
export const LOG_LEVEL = LOG_DEBUG;
