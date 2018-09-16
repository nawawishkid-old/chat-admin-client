import React from "react";
import styled from "styled-components";
import { configure, addDecorator } from "@storybook/react";

// automatically import all files ending in *.stories.js
const req = require.context("../src/components", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1em;
  background-color: #f0ede5;
`;

addDecorator(story => (
  <Wrapper>
    <h1>Hello!</h1>
    {story()}
  </Wrapper>
));

configure(loadStories, module);
