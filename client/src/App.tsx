import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Connect from "@pages/connect";
import Doshboard from "@pages/doshboard";
import { IceProvider } from "./components/iceContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Connect />,
  },
  {
    path: "/dashboard",
    element: <Doshboard />,
  },
]);

const App: React.FC<{}> = (props) => {
  return (
    <IceProvider>
      <RouterProvider router={router} />
    </IceProvider>
  );
};

export default App;
