import { createBrowserRouter } from "react-router-dom";
import Main from "../../Pages/Main/Main";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Media from "../../Pages/Media/Media";
import Message from "../../Pages/Message/Message";
import PostDetails from "../../Pages/Media/PostDetails";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const Routes= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('https://media-server-nine.vercel.app/threeServices')
            },
            {
                path: '/media',
                loader: ()=>fetch('https://media-server-nine.vercel.app/post'),
                element: <PrivateRoutes><Media></Media></PrivateRoutes>
            },
            {
                path: '/message',
                element: <Message></Message>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/details/:id',
                loader: ({params})=> fetch(`https://media-server-nine.vercel.app/details/${params.id}`),
                element:<PrivateRoutes><PostDetails></PostDetails></PrivateRoutes>
            }

        ]
    }
])