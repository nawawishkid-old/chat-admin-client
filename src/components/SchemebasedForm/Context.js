import React from "react";

const SchemebasedFormContext = React.createContext();
const SchemebasedFormProvider = SchemebasedFormContext.Provider;
const SchemebasedFormConsumer = SchemebasedFormContext.Consumer;

export {
  SchemebasedFormContext,
  SchemebasedFormProvider,
  SchemebasedFormConsumer
};

export default SchemebasedFormContext;
