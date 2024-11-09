import {
    createBrowserRouter,
    Routes
  } from "react-router-dom";
// import  App  from '../App';
import MenteeCardComponent from "../components/MenteeCardComponent";
import MainPage from "../Pages/MainPage";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
    {
      path: "/self",
      element: <MenteeCardComponent />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);
        
    