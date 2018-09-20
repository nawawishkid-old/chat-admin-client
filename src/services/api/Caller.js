import axios from "axios";
import EventEmitter from "~/src/services/EventEmitter";
import { jwtAuth } from "~/src/services/auth";

/**
 * APICaller
 * This class is depends on axiosJS and coupled with JWTAuth instance
 *
 * @see {@link https://github.com/axios/axios axios}
 * @see JWTAuth "~/src/services/auth/JWTAuth"
 */
class APICaller extends EventEmitter {
  /**
   * Constructor
   *
   * @param {String} method HTTP method
   * @param {String} uri URI of the API
   * @param {Object} options Additional options { auth: Boolean }
   */
  constructor(method, uri, options) {
    super();

    this.uri = uri;
    this.method = method;
    this.options = options;
  }

  /**
   * Call the API
   *
   * @public
   * @param {Object|Function} arg1 Option object or callback function
   * @param {Function} arg2 Callback function
   */
  call = (arg1, arg2 = null) => {
    const args = this.resolveCallMethodArguments(arg1, arg2);

    this.axiosCall(this.getAxiosOptions(args.userOptions), args.callback);
  };

  /**
   * Generate options object for Axios instance.
   *
   * @private
   * @param {Object} userOptions User-given APICaller option object ({ data: {<HTTPBody>}, path: <URLPath>, params: {<QueryParams>} }).
   * @returns {Object} Options object.
   */
  getAxiosOptions = userOptions => {
    const { method, uri, options } = this;
    const { data, path } = userOptions;
    const { auth } = options;
    const axiosOptions = {
      method,
      url: uri + (path || ""),
      headers: {}
    };

    if (auth) {
      this.setAxiosAuthHeader(axiosOptions);
    }

    axiosOptions.data = data ? data : undefined;

    return axiosOptions;
  };

  /**
   * Call axios.
   *
   * @param {Object} options Options object for axios instance.
   * @param {Function} callback Callback function for axios instance.
   */
  axiosCall = (options, callback) =>
    axios(options)
      .then(this.getHandleAxiosResponse(callback))
      .catch(this.getHandleAxiosError(callback));

  /**
   * Get handler for Axios server's response with code in 2xx range
   *
   * @private
   * @see https://github.com/axios/axios#handling-errors
   * @param {Function} callback Callback function for Axios.
   * @returns {Function} Axios response handler
   */
  getHandleAxiosResponse = callback => res => {
    const { status, data } = res;
    const args = [null, data, status];

    callback(...args);
    this.emit(status, ...args).emit("all", ...args);
  };

  /**
   * Get handler for Axios server's response with code out of 2xx range.
   *
   * @private
   * @see https://github.com/axios/axios#handling-errors
   * @param {Function} callback Callback function for Axios.
   * @returns {Function} Axios response handler
   */
  getHandleAxiosError = callback => err => {
    console.log("Request error...");

    if (err.response) {
      const { data, status } = err.response;
      const args = [response, null, status];

      callback(args);
      this.emit(status, ...args).emit("all", ...args);
    } else if (err.request) {
      console.error(err.request);
    } else {
      console.error("Error: ", err.message);
    }
  };

  /**
   * Set 'Authorization' header to Axios.
   * This method is coupled with `jwtAuth` instance
   *
   * @private
   * @see JWTAuth "~/src/services/auth/JWTAuth"
   * @param {Object} axiosOptions Options object for Axios instance
   */
  setAxiosAuthHeader = axiosOptions =>
    (axiosOptions.headers["Authorization"] = "Bearer " + jwtAuth.getToken());

  /**
   * Resolve arguments for this.call() method
   *
   * @private
   * @see this.call()
   * @param {Object|Function} arg1
   * @param {Function} arg2
   * @returns {Object} Object of arguments to be supplied to this.call()
   */
  resolveCallMethodArguments = (arg1, arg2 = null) => {
    let callback;
    let userOptions;
    const arg1Type = typeof arg1;

    if (arg1Type === "object") {
      userOptions = arg1 || {}; // fallback to {} in case `null` supplied (`null` is an object in JS)
      callback = arg2 || (() => {});
    } else if (arg1Type === "function") {
      userOptions = {};
      callback = arg1;
    } else {
      throw new Error(
        "Invalid argument supplied to APICaller.prototype.call()"
      );
    }

    return { callback, userOptions };
  };
}

export default APICaller;
