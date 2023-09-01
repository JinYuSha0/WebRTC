import React from "react";
import Connect from "@pages/connect";
import Doshboard from "@pages/doshboard";
import Album from "@pages/album";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  {
    path: "/album",
    element: <Album />,
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
