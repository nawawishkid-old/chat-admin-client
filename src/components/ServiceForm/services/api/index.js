import Axios from "axios";

class API {
  constructor(method, url, params) {
    const configs = {
      method: method,
      url: url
    };

    if (["post", "put", "patch"].indexOf(method) !== -1) {
      configs.data = params;
    } else {
      configs.params = params;
    }

    return Axios(configs);
  }
}

export default API;
