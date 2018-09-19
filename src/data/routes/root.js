import {
  PageHome,
  PageAdmin,
  Page404,
  PageLogin,
  PageSignup
} from "~/src/pages";
import { Router } from "~/src/services/route";
import adminRouter from "./admin";

const rootRouter = new Router("/");

rootRouter.add("/", PageHome, { exact: true });
// rootRouter.add("/admin", adminRouter, { auth: true });
rootRouter.add("/login", PageLogin);
rootRouter.add("/signup", PageSignup);
rootRouter.default(Page404);

export default rootRouter;
