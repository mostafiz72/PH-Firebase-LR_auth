import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx';
import Register from './Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Order from './Provider/Order.jsx';
import PrivateRoute from './Components/Routes/PrivateRoute.jsx';
import Profile from './Profile.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/orders",
        element: <PrivateRoute><Order /></PrivateRoute>,
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
      {
        path: "*",
        element: <h1>Page Not Found</h1>
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
