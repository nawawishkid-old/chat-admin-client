import { Router } from "~/src/services/route";
import {
  PageTemplateAll,
  PageTemplateNew,
  PageTemplateEdit
} from "~/src/pages/Template";
import { Page404, PageAdmin } from "../../pages";

const adminRouter = new Router("/admin");
const options = {
  auth: true,
  permission: "write"
};

adminRouter.add("/templates", PageTemplateAll, {
  ...options,
  permission: "read"
});
adminRouter.add("/template/new", PageTemplateNew, options);
adminRouter.add("/template/edit/:templateId", PageTemplateEdit, options);
adminRouter.default(Page404);

export { adminRouter };

export default adminRouter;
