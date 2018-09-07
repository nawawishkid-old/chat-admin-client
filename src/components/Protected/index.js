import React from "react";

const Protected = props => (props.show ? props.children : null);

export default Protected;
