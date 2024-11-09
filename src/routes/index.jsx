import {
    createBrowserRouter,
    Routes
  } from "react-router-dom";
// import  App  from '../App';
import MenteeCardComponent from "../components/MenteeCardComponent";
import MainPage from "../Pages/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
    {
      path: "/self",
      element: <MenteeCardComponent />,
    },
  ]);
        
    