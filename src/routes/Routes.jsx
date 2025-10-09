import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Base from "../pages/AppLayout/AppLayout";
import BasicError from "../pages/Error/BasicError";
import AllApps from "../pages/AllApps/AllApps";
import InstalledApps from "../pages/InstalledApps/InstalledApps";
import AppNotFoundError from "../pages/Error/AppNotFoundError";
import AppDetails from "../pages/AppDetails/AppDetails";
import Loading from "../components/Loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Base,
    errorElement: <BasicError />,
    children: [
      {
        index: true,
        Component: Home,
        HydrateFallback: () => {
          return <Loading />;
        },
        loader: () => fetch("./best-three.json"),
      },
      {
        path: "all-apps",
        HydrateFallback: () => {
          return <Loading />;
        },
        loader: () => fetch("data-all.json"),
        Component: AllApps,
      },
      {
        path: "detailed-app/:id",
        Component: AppDetails,
        HydrateFallback: () => {
          return <Loading />;
        },
        loader: () => fetch("data-all.json"),
        errorElement: <AppNotFoundError />,
      },
      {
        path: "installed-apps",
        Component: InstalledApps,
        HydrateFallback: () => {
          return <Loading />;
        },
        loader: () => fetch("data-all.json"),
      },
    ],
  },
]);

export default router;
