import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Books from "../Pages/Homepage/Books/Books";
import ErrorPage from "../Pages/Homepage/errorpage/ErrorPage";
import BookDetails from "../Pages/Homepage/BookDetails";

 export const router =createBrowserRouter([
  {
    path:"/",
    element:<MainLayout></MainLayout>,
    children:[
      {
      index:true,
      element:<Homepage></Homepage>
    },
    {
      path:'/books',
      element:<Books></Books>
    },
    {
      path:'/bookDetails/:bookId',
      Component:BookDetails,
      loader:() => fetch('/booksData.json'),
    }
  ],
  errorElement: <ErrorPage></ErrorPage>
  },
 
]);