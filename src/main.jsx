import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './PageLayout/Homepage.jsx';
import Home from './Page/Home/Home/Home.jsx';
import Details from './Page/Details/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader:()=>fetch('https://api.tvmaze.com/search/shows?q=all')
      },
      {
          path: "/details/:id",
          element: <Details/>,
          loader:({params})=>fetch('https://api.tvmaze.com/search/shows?q=all')
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<div className='container-xxl'>
<RouterProvider router={router} />
</div>
  </React.StrictMode>,
)
