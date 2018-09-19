import React from "react";
import adminRouter from "~/src/data/routes/admin";
import { renderRoutes } from "~/src/services/route";

const AdminContent = () => <div>{renderRoutes(adminRouter.routes)}</div>;

export default AdminContent;
