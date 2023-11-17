import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout.jsx";
import ErrorPage from "../components/Shared/ErrorPage/ErrorPage.jsx";
import Blogs from "../components/Blogs/Blogs.jsx";
import Home from "../components/Home/Home.jsx";
import Register from "../components/Register/Register.jsx";
import LogIn from "../components/LogIn/LogIn.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import ShopCategoryDetails from "../components/ShopCategoryDetails/ShopCategoryDetails.jsx";
import AddAToys from "../components/AddAToys/AddAToys.jsx";
import AllToys from "../components/AllToys/AllToys.jsx";
import ToyDetails from "../components/ToyDetails/ToyDetails.jsx";
import MyToys from "../components/MyToys/MyToys.jsx";
import ToyUpdate from "../components/ToyUpdate/ToyUpdate.jsx";


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
        path : 'allToys',
        element : <AllToys></AllToys>,
        loader : () => fetch('https://toy-kitchen-data.vercel.app/allToys')
      },
      {
        path : '/toyDetails/:id',
        element : <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader : ({params}) => fetch(`https://toy-kitchen-data.vercel.app/toyDetails/${params.id}`)
      },
      {
        path : '/addAToys',
        element : <PrivateRoute><AddAToys></AddAToys></PrivateRoute>
      },
      {
        path : '/shopCategoryDetails/:id',
        element : <PrivateRoute><ShopCategoryDetails></ShopCategoryDetails></PrivateRoute>,
        loader : ({params}) => fetch(`https://toy-kitchen-data.vercel.app/shopCategoryDetails/${params.id}`)
      },
      {
        path : '/myToys',
        element : <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path : 'toyUpdate/:id',
        element : <PrivateRoute><ToyUpdate></ToyUpdate></PrivateRoute>,
        loader : ({params}) => fetch(`https://toy-kitchen-data.vercel.app/toyUpdate/${params.id}`)
      },
      {
        path : '/blogs',
        element : <Blogs></Blogs>
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