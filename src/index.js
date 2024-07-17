import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  

} from "react-router-dom";
import App from "./App"
import Allcontact from "./Contact/Allcontact";
import Alltopick from "./Topik/Alltopick";
import AllTopickdetail from "./Topickdetail/AllTopickdetail";
import AllBrow from "./Browstopick/AllBrow";
import AllWorrk from "./AllWork/AllWorrk";
import AllFaqe from "./AllFaqe/AllFaqe";
import Allshoping from "./Shoping/Allshoping";
import Product from "./Proudct/Product";
import Allcart from "./Cart/Allcart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/> ,
  },
  {
    path: "contact",
    element: <Allcontact/>,
  },
  {
    path: "Topics",
    element: <Alltopick/>,
  },
  {
    path: "TopicsDetails",
    element: <AllTopickdetail/>,
  },
  {
    path: "BrowseTopics",
    element: <AllBrow/>,
  },
  {
    path: "How it works",
    element: <AllWorrk/>,
  },
  {
    path: "FAQs",
    element: <AllFaqe/>,
  },
  {
    path: "Shopping",
    element: <Allshoping/>,
  },
  {
    path: "Product",
    element: <Product/>,
  },
  {
    path: "Cart",
    element: <Allcart/>,
  },
 
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);



