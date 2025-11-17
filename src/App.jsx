import React from 'react';

import Banner from './components/Banner/Banner';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Accessories from './components/Accessories/Accessories';
import OurWorld from './components/OurWorld/OurWorld';
import Watches from './components/Watches/Watches';
import NotFound from './components/NotFound/NotFound';

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "accessories", element: <Accessories /> },
        { path: "watches", element: <Watches /> },
        { path: "ourworld", element: <OurWorld /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}