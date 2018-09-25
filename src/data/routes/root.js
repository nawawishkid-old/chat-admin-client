import {
  PageHome,
  PageAdmin,
  Page404,
  PageLogin,
  PageSignup
} from "~/src/pages";
import { RouteGroup } from "~/src/services/route";
import adminRouter from "./admin";

const rootRouter = new RouteGroup("/");

rootRouter.add("/", PageHome, { exact: true });
rootRouter.add("/admin", PageAdmin, { auth: true });
rootRouter.add("/login", PageLogin);
rootRouter.add("/signup", PageSignup);
rootRouter.default(Page404);

export { rootRouter };

export default rootRouter;
