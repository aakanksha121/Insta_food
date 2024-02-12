import Nav from "./src/Components/Nav";
import React, { useState } from "react";
import ReactDom from 'react-dom/client';
import Body from "./src/Components/Body";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Categories from "./src/Components/Categories";
import Help from "./src/Components/Help";
import MyOrders from "./src/Components/MyOrders";
import ReserveTable from "./src/Components/ReserveTable";
import Offer from "./src/Components/Offers";
import Favourites from "./src/Components/favourites";
import ExploreCuisines from "./src/Components/ExploreCuisines";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import Shimmer from "./src/Components/Shimmer";
import Form from "./src/Components/Form";
import SignUpForm from "./src/Components/SignUp";
import LogInForm from "./src/Components/LogIn";
import Cart from "./src/Components/Cart";
import useOnline from "./src/utils/hooks/useOnline";
import { useNavigate } from 'react-router-dom';
import SideNav from "./src/Components/sideNav";


function OfflineMessage() {
    return (
      <div className="bg-slate-500 fixed  z-10 bottom-0 left-0 right-0 p-4  text-center">
         
        Connection Error!<br />
        <span>Please check your internet connection and try again.</span>
       
      </div>
    );
  }

function AppLayout(){

    const status = useOnline();
  

    if (!status) {
        return (
          <div>
            <Nav name="Akankshaaaaaaaaaaaaaa" />
          
            <Outlet/>
            <OfflineMessage />
          </div>
        );
      }

      return (
        <div>
          <Nav name="Akankshaaaaaaaaaaaaaa" />
          
          <Outlet />
          {/* <SideNav/> */}
        </div>
      );
    }

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        
        children:[
            {
                path:'/',
                element:<Body/>,
            },
            {
                path:'reserve-table',
                element:<ReserveTable/>
            },
            {
                path:'/categories',
                element:<Categories/>
            },
            {
                path:'/help',
                element:<Help/>
            },
            {
                path:'/myorders',
                element:<MyOrders/>
            },
            {
                path:'/offers',
                element:<Offer/>
            },
            {
                path:'/favourites',
                element:<Favourites/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/cuisineCollections/:id',
                element:<ExploreCuisines/>
            },
            {
                path: "/restaurant/:id",
                element:<RestaurantMenu/>,
              },
              {
                path: "/",
                element: <Form />,
                children: [
                  {
                    path: 'logIn', // This is the default child route when the path is "/login"
                    element: <LogInForm />
                  },
                  {
                    path: 'SignUp',
                    element: <SignUpForm />
                  },
                ]
              }
              ,
        ]
    }
])

const root = ReactDom.createRoot(document.getElementById('root'));


root.render(<Shimmer />);

async function initializeApp() {
 
  await new Promise(resolve => setTimeout(resolve, 2000));
  root.render(<RouterProvider router={appRouter} />);
}

initializeApp();
