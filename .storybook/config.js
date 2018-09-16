import React from "react";
import { configure, addDecorator } from "@storybook/react";

// automatically import all files ending in *.stories.js
const req = require.context("../src/components", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <div style={{ padding: "1em" }}>
    <h1>Hello!</h1>
    {story()}
  </div>
));

configure(loadStories, module);
