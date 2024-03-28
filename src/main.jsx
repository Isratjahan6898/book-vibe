import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import ReadPage from './Components/ReadPage/ReadPage';
import ListedPage from './Components/ListedPage/ListedPage';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import BookDetails from './Components/BookDetails/BookDetails';
import ReadBooks from './Components/ReadBook/ReadBooks';
import WishList from './Components/WishList/WishList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/read",
        element:<ReadPage></ReadPage>
      },
      {
        path:"/listed",
        element:<ListedPage></ListedPage>,
       
       
       },

       {
        path:"/readlist",
        element:<ReadBooks></ReadBooks>
       },
       {
        path:"/whislist",
        element:<WishList></WishList>
       },

      {
        path:"/about",
        element:<About></About>

      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },

      {
        path:"/book/:id",
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('../books.json')
      },
    ]
 }]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
