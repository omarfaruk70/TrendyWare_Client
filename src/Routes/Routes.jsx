/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const App = lazy(() => import("../App"));
const Home = lazy(() => import("../Pages/Home/Home"));
const Shop = lazy(() => import("../Pages/Shop/Shop"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));
const ErrorPage = lazy(() => import("../Pages/ErrorPage/ErrorPage"));
const Loader = lazy(() => import("../Components/Loader/Loader"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader></Loader>}>
      <App></App>
      </Suspense>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <Home></Home>
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <Shop></Shop>
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <Contact></Contact>
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
