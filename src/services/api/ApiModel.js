import axios from "axios";
import auth from "~/src/services/auth";
import {
  SERVER_HOST,
  SERVER_PORT,
  SERVER_PROTOCAL
} from "~/src/services/config";

class ApiModel {
  endpoints = {};

  constructor(basePath) {
    this.basePath = this.resolveServerPath(basePath);
  }

  resolveServerPath = path =>
    `${SERVER_PROTOCAL}://${SERVER_HOST}:${SERVER_PORT || 80}${path}`;

  add = (name, method, path, options) => {
    this.endpoints[name] = { path, method, options };
  };

  /**
   *
   *
   * @param {String} name Name of action
   * @param {Object} userOptions { path: String, data: Object }
   * @param {Function} callback Callback function
   */
  exec = (name, userOptions = null, callback) => {
    const endpoint = this.endpoints[name];
    const userOpts = userOptions || {};

    console.log('userOpts: ', userOpts);

    if (!endpoint) {
      throw new Error("Unknown API endpoint name: " + name);
    }

    const { method, path } = endpoint;
    const axiosOptions = {
      method,
      url: this.basePath + path + (userOpts.path || "")
    };

    console.log('axiosOptions: ', axiosOptions)

    if (endpoint.options.auth) {
      axiosOptions.headers = { Authorization: "Bearer " + auth.getToken() };
    }

    if (userOpts.data) {
      axiosOptions.data = userOpts.data;
    }

    axios(axiosOptions)
      .then(res => callback(null, res.data))
      .catch(err => {
        console.log("Request error...");

        callback(err, null);

        if (err.response) {
          const { data, status, headers } = err.response;
          console.log(`[${status}] ${data.msg}`, data.err.message);
          // console.log(err.response.status);
          // console.log(err.response.headers);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error", err.message);
        }
      });
  };

  /**
   * For future refactoring
   */
  _resolveCallback = arg =>
    arg.constructor.name === "Function" ? arg : () => {};
}

// model.get()
// model.create()
// model.update()
// model.delete()

// model = new ApiModel();
// model.add({
//   name: "create",
//   path: "",
//   method: "post",
//   auth: true
// });
// model.exec("create", data, callback);

export default ApiModel;
