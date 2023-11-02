import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/checkOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";
// import BookServices from "../pages/bookServices/BookServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        // {
        //    path:'/book/:id',
        //    element:<BookServices></BookServices>,
        //    loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        // },
        {
          path:'/checkout/:id',
          element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/booking',
          element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>
        }

    ]
  },
]);

export default router;
