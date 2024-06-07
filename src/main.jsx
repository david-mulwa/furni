import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";
import "./index.css";
import Home from './Pages/Home.jsx'
import Error from './Pages/Error.jsx'
import Layout  from './Layout.jsx'
import Shop from './Pages/Shop.jsx'
import About from './Pages/About.jsx'
import Blog from './Pages/Blog.jsx'
import Contact from './Pages/Contact.jsx'
import Services from './Pages/Services.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<Error />,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:'/About',
        element:<About />
      },
      {
        path:'/Blog',
        element:<Blog />
      },
      {
        path:'/Contact',
        element:<Contact />
      },
      {
        path:'/Services',
        element:<Services />
      },
      {
        path:'/Shop',
        element:<Shop />
      },

    ]
    
    
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);