import { TemplateInputs, Templates, Profile, Info } from "./scenes";
import {
  All as TemplateAll,
  New as TemplateNew,
  Edit as TemplateEdit,
  Trash as TemplateTrash
} from "./scenes/Templates/scenes";
import {
  All as InputAll,
  New as InputNew,
  Trash as InputTrash
} from "./scenes/TemplateInputs/scenes";

const templates__new = {
  menu: {
    type: "item" // <Menu.Item>
  },
  name: "New",
  path: `/new`,
  component: TemplateNew
};
const templates__edit = {
  // Do not display menu
  // menu: {
  //   type: "item"
  // },
  name: "Edit",
  path: `/edit/:templateId`,
  component: TemplateEdit
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
    type: "sub", // <Menu.SubMenu>
    title: "Templates",
    items: [templates__new, templates__edit, templates__trash]
  },
  name: "All",
  path: `/templates`,
  component: Templates // TemplateAll
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
  component: InputAll
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
