import React from "react";
import { RouteGroup } from "~/src/services/route";
import {
  PageTemplateAll,
  PageTemplateNew,
  PageTemplateEdit
} from "~/src/pages/Template";
import { Page404, PageAdmin } from "../../pages";
import { Redirect } from "react-router-dom";

const adminRouter = new RouteGroup("/admin");
const options = {
  auth: true,
  permission: "write"
};

adminRouter.add('/', () => <Redirect to="/admin/templates" />, { ...options, exact: true });
adminRouter.add("/templates", PageTemplateAll, {
  ...options,
  permission: "read",
  exact: true
});
adminRouter.add("/templates/new", PageTemplateNew, {
  ...options,
  exact: true
});
adminRouter.add("/templates/:templateId([a-f0-9]{24})/edit", PageTemplateEdit, options);
// Could not set 404 page for /admin route group
// If set, the <Router> always switch to 404 page.
// If not, <Router> always display /admin page (PageAdmin)
//adminRouter.default(() => <Redirect to="/notfound" />);

export { adminRouter };

export default adminRouter;
