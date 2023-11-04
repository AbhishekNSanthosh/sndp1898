import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './App.css'
import { Home } from './modules/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home /> 
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
