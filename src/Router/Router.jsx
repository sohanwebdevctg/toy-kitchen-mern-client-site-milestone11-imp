import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout.jsx";
import ErrorPage from "../components/Shared/ErrorPage/ErrorPage.jsx";
import Blogs from "../components/Blogs/Blogs.jsx";
import Home from "../components/Home/Home.jsx";
import Register from "../components/Register/Register.jsx";
import LogIn from "../components/LogIn/LogIn.jsx";
import PrivateRoute from "./PrivateRoute.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/blogs',
        element : <PrivateRoute><Blogs></Blogs></PrivateRoute>
      },
      {
        path : '/login',
        element : <LogIn></LogIn>
      },
      {
        path : '/register',
        element : <Register></Register>
      }
    ]
  },
]);

export default router