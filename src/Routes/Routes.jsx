import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorElement from "../Component/ErrorElement/ErrorElement";
import Home from "../Component/Home/Home";
import Queries from "../Component/Queries/Queries";
import RecoForMe from "../Component/RecoForMe/RecoForMe";
import MyQueries from "../Component/MyQueries/MyQueries";
import MyReco from "../Component/MyReco/MyReco";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/queries',
                element: <Queries></Queries>
            },
            {
                path: '/recoforme',
                element: <RecoForMe></RecoForMe>
            },
            {
                path: '/myqueries',
                element: <MyQueries></MyQueries>
            },
            {
                path: '/myreco',
                element: <MyReco></MyReco>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }

        ]
    }
])