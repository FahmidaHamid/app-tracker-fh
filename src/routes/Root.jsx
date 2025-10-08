import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Base from "../pages/Base/Base";
import BasicError from "../pages/Error/BasicError";
import AllApps from "../pages/AllApps/AllApps";
import InstalledApps from "../pages/Installed/InstalledApps";
import AppNotFoundError from "../pages/Error/AppNotFoundError";
import AppDetails from "../pages/AppDetails/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Base,
    errorElement: <BasicError />,
    children: [
      {
        index: true,
        Component: Home,
        HydrateFallback: () => <h1>Loading</h1>,
        loader: () => fetch("./best-three.json"),
      },
      {
        path: "all-apps",
        HydrateFallback: () => <h1>Loading All Apps...</h1>,
        loader: () => fetch("./data-all.json"),
        Component: AllApps,
      },
      {
        path: `details-app/:id`,
        Component: AppDetails,
        errorElement: <AppNotFoundError />,
      },
      {
        path: "installed-apps",
        Component: InstalledApps,
      },
    ],
  },
]);

export default router;
