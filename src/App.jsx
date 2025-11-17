import React from 'react';

import Banner from './components/Banner/Banner';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Accessories from './components/Accessories/Accessories';
import OurWorld from './components/OurWorld/OurWorld';
import Watches from './components/Watches/Watches';

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "accessories", element: <Accessories /> },
        { path: "watches", element: <Watches /> },
        { path: "ourworld", element: <OurWorld /> },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}