const BASE_URL = "http://localhost:11111/services";

const GET_PRICE = BASE_URL + "/get-price.php";
const GET_ORDER_COMPLETION = BASE_URL + "/get-order-completion.php";
const GET_FULL_EMAIL_ADDRESS = BASE_URL + "/get-full-email-address.php";

export const ChatTemplate = {
  get: {
    price: GET_PRICE,
    order_completion: GET_ORDER_COMPLETION,
    full_email_address: GET_FULL_EMAIL_ADDRESS
  }
};
