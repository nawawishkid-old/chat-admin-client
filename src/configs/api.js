export const API_SERVER_HOST =
  typeof WEBPACK_API_SERVER_HOST === "undefined"
    ? "localhost"
    : WEBPACK_API_SERVER_HOST;
export const API_SERVER_PORT =
  typeof WEBPACK_API_SERVER_PORT === "undefined"
    ? "11112"
    : WEBPACK_API_SERVER_PORT;
export const API_SERVER_PROTOCAL =
  typeof WEBPACK_API_SERVER_PROTOCAL === "undefined"
    ? "http"
    : WEBPACK_API_SERVER_PROTOCAL;
