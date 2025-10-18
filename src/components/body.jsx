import { createBrowserRouter, Outlet } from 'react-router-dom';

import Navbar from "./Header/navbar.jsx";
import RestCards from "./Cards/Restaurant.jsx"
import About from "./About.jsx"
import Help from "./Help.jsx";

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

