import {
  PageTemplateAll,
  PageTemplateNew,
  PageTemplateEdit
} from "~/src/pages/Template";
import PageHome from "~/src/pages/Home";
import Page404 from "~/src/pages/404";
import PageLogin from "~/src/pages/Login";
import PageSignup from "~/src/pages/Signup";
import { Router } from "~/src/services/route";

const router = new Router();
const options = {
  auth: true,
  permission: "write"
};

router.add("/templates", PageTemplateAll, { ...options, permission: "read" });
router.add("/template/new", PageTemplateNew, options);
router.add("/template/edit/:templateId", PageTemplateEdit, options);
router.add("/", PageHome, { exact: true });
router.add("/login", PageLogin);
router.add("/signup", PageSignup);
router.add(null, Page404);

export default router;
