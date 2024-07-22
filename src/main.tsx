import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts from './pages/posts.tsx'
import Login from './pages/login.tsx'
import Register from './pages/register.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
   {
    path: "login",
    element: <Login />,
  },
   {
    path: "register",
    element: <Register />,
  },
  {
    path: "posts",
    element: <Posts />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
