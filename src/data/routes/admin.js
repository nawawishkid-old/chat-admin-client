import React from "react";
import { RouteGroup } from "~/src/services/route";
import {
  PageTemplateAll,
  PageTemplateNew,
  PageTemplateEdit
} from "~/src/pages/Template";
import {
  PageTemplateInputAll,
  PageTemplateInputNew,
  PageTemplateInputEdit
} from "~/src/pages/TemplateInput";
import { PageUserProfile, PageUserProfileEdit } from "~/src/pages/UserProfile";
import { PageSettingsAccount } from "~/src/pages/Settings";
import { Page404, PageAdmin } from "../../pages";
import { Redirect } from "react-router-dom";

const adminRouter = new RouteGroup("/admin");
const options = {
  auth: true,
  permission: "write"
};
const optionsExact = {
  ...options,
  exact: true
};
const optionsPermRead = {
  ...optionsExact,
  permission: "read"
};

adminRouter.add("/", () => <Redirect to="/admin/templates" />, optionsExact);

// Template
adminRouter.add("/templates", PageTemplateAll, optionsPermRead);
adminRouter.add("/templates/new", PageTemplateNew, optionsExact);
adminRouter.add(
  "/templates/:templateId([a-f0-9]{24})/edit",
  PageTemplateEdit,
  options
);

// TemplateInput
adminRouter.add("/template-inputs", PageTemplateInputAll, optionsPermRead);
adminRouter.add("/template-inputs/new", PageTemplateInputNew, optionsExact);
adminRouter.add(
  "/template-inputs/:templateInputId([a-f0-9]{24})/edit",
  PageTemplateInputEdit,
  options
);

// Profile
adminRouter.add("/profile", PageUserProfile, optionsExact);
adminRouter.add("/profile/edit", PageUserProfileEdit, options);

// Settings
adminRouter.add("/settings/account", PageSettingsAccount, optionsExact);

// Could not set 404 page for /admin route group
// If set, the <Router> always switch to 404 page.
// If not, <Router> always display /admin page (PageAdmin)
//adminRouter.default(() => <Redirect to="/notfound" />);

export { adminRouter };

export default adminRouter;
