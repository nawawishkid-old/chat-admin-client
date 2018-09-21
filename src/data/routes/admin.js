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

adminRouter.add("/templates", PageTemplateAll, {
  ...options,
  permission: "read",
  exact: true
});
adminRouter.add("/templates/new", PageTemplateNew, {
  ...options,
  exact: true
});
adminRouter.add("/templates/:templateId(d+)/edit", PageTemplateEdit, options);
//adminRouter.default(() => <Redirect to="/notfound" />);

export { adminRouter };

export default adminRouter;
