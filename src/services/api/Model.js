import { apiResolver } from "./index";
import APICaller from "./Caller";

/**
 * Should use Node's EventEmitter pattern to handle HTTP response code
 * apiModel.on(401, (err, data) => <Redirect to="/login" />)
 */
class APIGroup {
  endpoints = {};

  constructor(basePath) {
    this.basePath = apiResolver(basePath);
  }

  on = (eventName, callback) => {
    // Attach event listener to all endpoints
    Object.keys(this.endpoints).forEach(key =>
      this.get(key).on(eventName, callback),
    );
  };

  add = (endpointName, method, path, options) => {
    this.endpoints[endpointName] = new APICaller(
      method,
      this.basePath + path,
      options,
    );
  };

  /**
   * Get API Caller instance.
   *
   * @param {String} endpointName Name of the endpoint.
   * @returns {APICaller}
   */
  get = endpointName => this.endpoints[endpointName];

  /**
   *
   *
   * @param {String} name Name of action
   * @param {Object} userOptions { path: String, data: Object }
   * @param {Function} callback Callback function
   */
  exec = (endpointName, userOptions = null, callback) => {
    const endpoint = this.get(endpointName);
    const userOpts = userOptions || {};

    // console.log('userOpts: ', userOpts);

    if (!endpoint) {
      throw new Error("Unknown API endpoint name: " + name);
    }

    endpoint.call(userOpts, callback);
  };
}

export default APIGroup;
