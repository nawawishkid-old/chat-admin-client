import React from "react";
// import { Route } from "../../../services/api/index";

const Route = {
  baseURL: "http://localhost:11111/services"
};

const withApiHandling = Component => {
  return class extends React.Component {
    render() {
      const props = {
        ...this.props,
        request: {
          url: Route.baseURL + "/" + this.props.path,
          method: this.props.method,
          onSuccess: (data, parent) => {
            parent.output.current.textAreaRef.value =
              data.data[this.props.dataKey];

            return {
              output: data.data[this.props.dataKey],
              errorText: ""
            };
          },
          onError: (err, parent) => {
            let msg;

            if (err.response) {
              msg = err.response.data.errors;
            } else if (err.request) {
              msg = "Error with HTTP Request";
              console.log(err.request);
            } else {
              msg = err.message;
            }

            console.log(msg);
            console.log(err.config);

            return { errorText: msg };
          }
        }
      };

      return <Component {...props} />;
    }
  };
};

export default withApiHandling;
