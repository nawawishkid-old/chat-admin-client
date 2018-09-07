import React from "react";

export const withConsumer = (Consumer, callback) => () => (
  <Consumer>{props => callback(props)}</Consumer>
);
