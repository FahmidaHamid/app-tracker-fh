import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import Base from "../components/Base/Base";
import BasicError from "../components/Error/BasicError";
import AllApps from "../components/AllApps/AllApps";
import InstalledApps from "../components/Installed/InstalledApps";
import AppNotFoundError from "../components/Error/AppNotFoundError";
import AppDetails from "../components/AppDetails/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Base,
    errorElement: <BasicError />,
    children: [
      { index: true, Component: Home },
      {
        path: "all-apps",
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
