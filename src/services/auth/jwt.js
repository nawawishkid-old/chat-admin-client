import axios from "axios";
import * as config from "../config";

// const tokenStoreName = config.LOCAL_STORAGE_ACCESS_TOKEN_NAME;
// const payloadStoreName = config.LOCAL_STORAGE_ACCESS_TOKEN_PAYLOAD_NAME;
const UNAUTHENTICATED = 1;
const EXPIRED = 2;
const AUTHENTICATED = 3;

class JWTAuth {
  constructor(options) {
    this.settings = {
      storageType: "local",
      storageTokenKey: undefined,
      storagePayloadKey: undefined,
      ...options
    };
  }

  clearStorage() {
    const { storageTokenKey, storagePayloadKey } = this.settings;

    sessionStorage.removeItem(storageTokenKey);
    sessionStorage.removeItem(storagePayloadKey);

    localStorage.removeItem(storageTokenKey);
    localStorage.removeItem(storagePayloadKey);
  }

  getStorage() {
    const { storageType } = this.settings;

    if (storageType === "session") {
      return sessionStorage;
    }

    if (storageType === "local") {
      return localStorage;
    }

    throw new Error("Unknow storage type: " + storageType);
  }

  /**
   * Save given token to localStorage
   *
   * @param {String} token JWT Token
   * @param {Boolean} isPersisted Remember user or not.
   */
  saveToken = token => {
    this.clearStorage();

    // this.settings.storageType = isPersisted ? "local" : "session";

    const payload = JSON.stringify(this.parseTokenPayload(token));
    const { storageTokenKey, storagePayloadKey } = this.settings;
    const storage = this.getStorage();

    storage.setItem(storageTokenKey, token);
    storage.setItem(storagePayloadKey, payload);
  };

  /**
   * Get token's parsed payload
   *
   * @returns {Object|Null}
   */
  getParsedTokenPayload = () => {
    const payload1 = JSON.parse(
      this.getStorage().getItem(this.settings.storagePayloadKey)
    );
    const payload2 = this.parseTokenPayload(this.getToken());
    const payload = payload1 || payload2;

    // console.log("payload1: ", payload1);
    // console.log("payload2: ", payload2);
    console.log("payload: ", payload);

    return payload;
  };

  /**
   * Parse token's payload from given JWT token
   *
   * @param {String} token JWT Token
   * @returns {Object} Token's payload object.
   */
  parseTokenPayload = token => {
    if (!token) {
      return null;
    }

    const payload = JSON.parse(atob(token.split(".")[1]));

    if (typeof payload.exp === "number") {
      payload.lifespan = payload.exp - payload.iat;
    }

    // console.log(payload);

    return payload;
  };

  /**
   * Get token from localStorage
   *
   * @returns {String|Null}
   */
  getToken = () => this.getStorage().getItem(this.settings.storageTokenKey);

  /**
   * Logout by removing token-related info in local storage
   */
  logout = () => {
    const { storageTokenKey, storagePayloadKey } = this.settings;
    const storage = this.getStorage();

    storage.removeItem(storageTokenKey);
    storage.removeItem(storagePayloadKey);
  };

  /**
   * Check auth
   *
   * @return {Boolean}
   */
  auth = () => (this.check() < 3 ? false : true);

  /**
   * Check if current user is authenticated
   *
   * @returns {Number}
   */
  check = () => {
    const payload = this.getParsedTokenPayload();

    console.log("check() payload: ", payload);

    if (!payload) {
      console.warn("Unauthenticated");
      return UNAUTHENTICATED;
    }

    if (typeof payload.lifespan === "undefined") {
      console.info("Authenticated");
      return AUTHENTICATED;
    }

    const tokenAge = Math.floor(Date.now() / 1000) - payload.iat;
    const result = tokenAge < payload.lifespan;

    console.log("-- tokenAge: ", tokenAge);
    console.log("-- lifespan: ", payload.lifespan);

    if (result) {
      console.info("Authenticated");
    } else {
      console.warn("Unauthenticated");
    }

    return result ? AUTHENTICATED : EXPIRED;
  };

  /**
   * Refresh the expired token
   */
  /*refresh = async () => {
    console.log("Refresh token");
    const oldToken = this.getToken();

    if (typeof oldToken !== "string") {
      return null;
    }

    return await axios
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
          return false;
        }

        this.saveToken(data.token);

        return true;
      })
      .catch(err => console.error(err));
  };*/

  /**
   * Authenticate user
   *
   * @param {String} username Username
   * @param {String} password Password
   * @returns {Boolean}
   */
  login = async (credential, callback) => {
    const { username, password, remember } = credential;
    console.log("username: ", username, "password: ", password);
    if (!username || !password) {
      return false;
    }

    // If user has already been authenticated.
    if (this.auth()) {
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
          callback(data.err);
          return false;
        }

        this.saveToken(data.token);

        callback(null, data);

        return data;
      })
      .catch(err => console.error(err));
  };
}

export default new JWTAuth({
  storageTokenKey: config.LOCAL_STORAGE_ACCESS_TOKEN_NAME,
  storagePayloadKey: config.LOCAL_STORAGE_ACCESS_TOKEN_PAYLOAD_NAME
});
