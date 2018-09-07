import Api from "./index";
import { ChatTemplate } from "./routes";

export const getPrice = (params, success, error) => {
  new Api("GET", ChatTemplate.get.price, params)
    .then(data => success)
    .catch(err => error);
};
