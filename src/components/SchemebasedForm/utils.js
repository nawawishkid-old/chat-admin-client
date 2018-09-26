import React from "react";
import makeLoadable from "~/src/components/Loadable";

const loadable = Component =>
  makeLoadable(({ data, handleSubmit, ...rest }) => (
    <Component doc={data} handleSubmit={handleSubmit} {...rest} />
  ));

export { loadable };

export default loadable;
