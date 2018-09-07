import axios from "axios";
import * as config from "../config";
import { serviceLogger as logger } from "../loggers/index";

logger.setLevel(1);

const UNAUTHENTICATED = 1;
const EXPIRED = 2;
const AUTHENTICATED = 3;

/**
 * Save given token to localStorage
 *
 * @param {String} token JWT Token
 */
const saveToken = token => {
  logger.debug("jwt.saveToken()");
  // Save token
  localStorage.setItem(config.LOCAL_STORAGE_ACCESS_TOKEN_NAME, token);
  // Save parsed token payload
  localStorage.setItem(
    config.LOCAL_STORAGE_ACCESS_TOKEN_PAYLOAD_NAME,
    parseTokenPayload(token)
  );
};

/**
 * Parse token's payload from given JWT token
 *
 * @param {String} token JWT Token
 * @returns {Object} Token's payload object.
 */
const parseTokenPayload = token => {
  logger.debug("jwt.parseTokenPayload()");
  // logger.debug("-- token: " + token);
  // logger.debug("-- typeof token: " + typeof token);
  if (!token) {
    return null;
  }

  const payload = JSON.parse(atob(token.split(".")[1]));

  if (typeof payload.exp === "number") {
    payload.lifespan = payload.exp - payload.iat;
  }

  logger.debug("-- payload: " + payload);

  return payload;
};

/**
 * Get token from localStorage
 *
 * @returns {String|Null}
 */
const getToken = () => {
  logger.debug("jwt.getToken()");
  const token = localStorage.getItem(config.LOCAL_STORAGE_ACCESS_TOKEN_NAME);

  return token;
};

/**
 * Get token's parsed payload
 *
 * @returns {Object|Null}
 */
const getParsedTokenPayload = () =>
  localStorage.getItem(config.LOCAL_STORAGE_ACCESS_TOKEN_PAYLOAD_NAME) ||
  parseTokenPayload(getToken());

/**
 * Refresh the expired token
 */
const refresh = async () => {
  logger.debug("jwt.refresh()");
  const oldToken = getToken();

  if (typeof oldToken !== "string") {
    return null;
  }

  await axios
    .post(
      config.REFRESH_TOKEN_API_PATH,
      {},
      {
        headers: {
          Authorization: "Bearer " + oldToken
        }
      }
    )
    .then(res => {
      const { data } = res;

      if (typeof data.token !== "string") {
        logger.warn("Unauthenticated");
        return false;
      }

      saveToken(data.token);

      return true;
    })
    .catch(err => console.error(err));
};

/**
 * Authenticate user
 *
 * @param {String} username Username
 * @param {String} password Password
 * @returns {Boolean}
 */
export const authenticate = async (username, password, callback) => {
  logger.debug("jwt.authenticate()");
  console.log("username: ", username, "password: ", password);
  if (!username || !password) {
    return false;
  }

  // If user has already been authenticated.
  if (auth()) {
    return true;
  }

  axios
    .post(config.ACCESS_TOKEN_API_PATH, {
      username: username,
      password: password
    })
    .then(res => {
      console.log("response: ", res);

      const { data } = res;

      if (typeof data === "undefined") {
        logger.warn("Unauthenticated");
        callback(data.err);
        return false;
      }

      saveToken(data.token);
      logger.info("Authenticated");

      callback(null, data);

      return data;
    })
    .catch(err => {
      logger.info("Unauthenticated");
      console.error(err);
      // if (err.response) {
      //   console.log("response error");
      //   console.log(err.response);
      // } else if (err.request) {
      //   console.log("request error");
      //   console.log(err.request);
      // } else {
      //   console.log("err", err.message);
      // }
    });
};

/**
 * Check if current user is authenticated
 *
 * @returns {Number}
 */
export const check = () => {
  logger.debug("jwt.check()");
  const payload = getParsedTokenPayload();

  if (!payload) {
    logger.warn("Unauthenticated");
    return UNAUTHENTICATED;
  }

  if (typeof payload.lifespan === "undefined") {
    logger.info("Authenticated");
    return AUTHENTICATED;
  }

  const tokenAge = Math.floor(Date.now() / 1000) - payload.iat;
  const result = tokenAge < payload.lifespan;

  return result ? AUTHENTICATED : EXPIRED;
};

/**
 * Logout by removing token-related info in local storage
 */
export const logout = () => {
  logger.debug("jwt.logout()");
  localStorage.removeItem(config.LOCAL_STORAGE_ACCESS_TOKEN_NAME);
  localStorage.removeItem(config.LOCAL_STORAGE_ACCESS_TOKEN_PAYLOAD_NAME);
};

/**
 * Check auth
 *
 * @return {Boolean}
 */
export const auth = () => (check() < 3 ? false : true);

/**
 * If token has expired, try refreshing the token
 *
 * @returns {Boolean}
 */
// export const ensureAuth = async () => {
//   logger.debug("jwt.ensureAuth()");
//   const authCode = check();

//   if (authCode === 3) {
//     return true;
//   }

//   if (authCode === 1) {
//     return false;
//   }

//   logger.info("Trying auth again...");
//   // Get new token.
//   await refresh();

//   // Check if authenticated again.
//   return auth();
// };
