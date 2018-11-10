import axios from "axios";
import authApi from "~/src/api/auth";

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
    /**
     * Avoid storing `undefined` value into WebStorage
     * because it will store as a string with value 'undefined'
     * which leads to misbehaviour of the program and hard to debug
     */
    if (typeof token === "undefined") {
      throw new Error("Token is undefined!");
    }

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
    const token = this.getToken();

    const payload2 = this.parseTokenPayload(token);
    const payload = payload1 || payload2;

    return payload;
  };

  /**
   * Parse token's payload from given JWT token
   *
   * @param {String} token JWT Token
   * @returns {Object} Token's payload object.
   */
  parseTokenPayload = token => {
    if (!token || typeof token === "undefined") {
      return null;
    }

    const payload = JSON.parse(atob(token.split(".")[1]));

    if (typeof payload.exp === "number") {
      payload.lifespan = payload.exp - payload.iat;
    }

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

    this.clearStorage();
    // storage.removeItem(storageTokenKey);
    // storage.removeItem(storagePayloadKey);
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

    if (!payload) {
      return UNAUTHENTICATED;
    }

    if (typeof payload.lifespan === "undefined") {
      return AUTHENTICATED;
    }

    const tokenAge = Math.floor(Date.now() / 1000) - payload.iat;
    const result = tokenAge < payload.lifespan;

    return result ? AUTHENTICATED : EXPIRED;
  };

  /**
   * Refresh the expired token
   */
  /*refresh = async () => {
    
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
      // .catch(err => console.error(err));
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

    if (!username || !password) {
      return;
    }

    // If user has already been authenticated.
    if (this.auth()) {
      return true;
    }

    axios
      .post(authApi.endpoints.getToken.uri, {
        grantType: "password",
        username: username,
        password: password
      })
      .then(res => {
        const { data } = res;

        if (typeof data === "undefined") {
          return false;
        }

        // Avoid saving `undefined` to WebStorage
        if (typeof data.accessToken !== "undefined") {
          this.saveToken(data.accessToken);
        }

        callback(null, data);

        return data;
      })
      .catch(err => {
        callback(err, null);
      });
  };
}

export default JWTAuth;
