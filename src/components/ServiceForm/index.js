// import React from "react";
import Container from "./components/Container/index";
import Presentation from "./components/Presentation/index";
// import WithGenderInput from "./components/WithGenderInput/index";
import { withGenderInput, withApiHandling } from "./extensions/index";

const ServiceForm = Container;

export { ServiceForm, Container, Presentation, withGenderInput, withApiHandling };

export default ServiceForm;
