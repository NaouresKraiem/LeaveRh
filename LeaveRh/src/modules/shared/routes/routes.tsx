import sharedRoutes from "./sharedRoutes";
import authRoutes from "../../auth/routes/routes";
import adminRoutes from "../../Jobs/routes/routes";

const routes = [...sharedRoutes, ...authRoutes, ...adminRoutes];

export default routes;
