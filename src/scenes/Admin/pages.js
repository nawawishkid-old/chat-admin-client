import { TemplateInputs, Templates, Profile, Info } from "./scenes";
import { New } from "./scenes/TemplateInputs/scenes/New";

const templates = {
  name: "Templates",
  path: `/templates`,
  component: Templates
};
const templateInputs = {
  name: "Template Inputs",
  path: `/inputs`,
  component: TemplateInputs,
  children: [
    {
      name: "New",
      path: "/new",
      component: New
    }
  ]
};
// temporary
const info = {
  name: "Info",
  path: `/info`,
  component: Info
};
const profile = {
  name: "Profile",
  path: `/profile`,
  component: Profile
};

export { templates, templateInputs, profile, info };

export default [templates, templateInputs, profile, info];
