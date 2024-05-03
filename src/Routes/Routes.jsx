/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const App = lazy(() => import("../App"));
const Home = lazy(() => import("../Pages/Home/Home"));
const Shop = lazy(() => import("../Pages/Shop/Shop"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div className="h-screen flex justify-center items-center text-yellow-500 text-3xl">
            Loading..........
          </div>
        }
      >
        <App></App>
      </Suspense>
    ),
    errorElement: <h>This is an error page</h>,
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={
              <div className="h-screen flex justify-center items-center text-yellow-500 text-3xl">
                Loading..........
              </div>
            }
          >
            <Home></Home>
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense
            fallback={
              <div className="h-screen flex justify-center items-center text-yellow-500 text-3xl">
                Loading.......
              </div>
            }
          >
            <Shop></Shop>
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Loading.......</div>}>
            <Contact></Contact>
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
