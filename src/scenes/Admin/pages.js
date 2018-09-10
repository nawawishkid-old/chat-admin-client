import { TemplateInputs, Templates, Profile, Info } from "./scenes";
import {
  New as TemplateNew,
  Trash as TemplateTrash
} from "./scenes/Templates/scenes";
import {
  New as InputNew,
  Trash as InputTrash
} from "./scenes/TemplateInputs/scenes";

const templates__new = {
  menu: {
    type: "item"
  },
  name: "New",
  path: `/new`,
  component: TemplateNew
};
const templates__trash = {
  menu: {
    type: "item"
  },
  name: "Trash",
  path: `/trash`,
  component: TemplateTrash
};
const templates = {
  menu: {
    type: "sub",
    title: "Templates",
    items: [templates__new, templates__trash]
  },
  name: "All",
  path: `/templates`,
  component: Templates
};
const templateInputs__new = {
  menu: {
    type: "item"
  },
  name: "New",
  path: `/new`,
  component: InputNew
};
const templateInputs__trash = {
  menu: {
    type: "item"
  },
  name: "Trash",
  path: `/trash`,
  component: InputTrash
};
const templateInputs = {
  menu: {
    type: "sub",
    title: "Template Inputs",
    items: [templateInputs__new, templateInputs__trash]
  },
  name: "All",
  path: `/inputs`,
  component: TemplateInputs
};
// temporary
const info = {
  menu: {
    type: "item"
  },
  name: "Info",
  path: `/info`,
  component: Info
};
const profile = {
  menu: {
    type: "item"
  },
  name: "Profile",
  path: `/profile`,
  component: Profile
};

export { templates, templateInputs, profile, info };

export default [templates, templateInputs, profile, info];
