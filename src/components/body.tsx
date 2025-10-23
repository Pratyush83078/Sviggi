import { createBrowserRouter, Outlet } from 'react-router-dom';

import Navbar from "./Header/navbar.tsx";
import RestCards from "./Cards/Restaurant.tsx"
import About from "./About.tsx"
import Help from "./Help.tsx";
// import { FC } from 'react';

const Body = () => (
  <div className="app">
    <Navbar />
    <Outlet />
  </div>
)
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body/>,
    children:[
      {
        path:'/',
        element: <RestCards/>,
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/help',
        element:<Help/>,
      },
    ]
  }
])
export default appRouter;

