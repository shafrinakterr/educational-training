import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../mainlayOut/MainlayOut";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Details from "../components/details/Details";
import Login from "../pages/login/Login";
import Error from "../pages/error/Error";
import Register from "../pages/resgister/Register";
import PrivateRoutes from "../privateRoters/PrivateRoutes";
import Services from "../pages/services/Services";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainlayOut></MainlayOut>,
        errorElement: <Error></Error>,
        children: [
           {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('/education.json')
           },
           {
            path: '/details/:id',
            element:<PrivateRoutes><Details></Details></PrivateRoutes>,
            loader: ()=> fetch('/education.json')
           },
           {
            path: '/services',
            element: <Services></Services>,
            loader: ()=> fetch('/education.json')
           },
           {
            path: '/about',
            element: <About></About>
           },
           {
            path: '/contact',
            element: <Contact></Contact>
           },
           {
            path: '/login',
            element: <Login></Login>
           },
           {
            path: '/singup',
            element:<Register></Register>
           },
           
          
        ]
    }
])

export default router;