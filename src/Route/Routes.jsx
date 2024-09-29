import React from 'react'
import Resturants from '../components/Resturants'
import About from '../components/About'
import Contact from '../components/Contact';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ErrorPage from '../Pages/Error';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Resturants/>,
      errorElement: <ErrorPage />,

    },
    {
        path: "/About",
        element: <About/>,
      },
      {
        path: "/Contact",
        element: <Contact/>,
      },
  ]);


export default router