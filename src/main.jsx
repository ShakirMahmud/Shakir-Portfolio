import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Home/HomeLayout.jsx';
import Home from './Home/Home.jsx';
import AllProjects from './pages/AllProjects.jsx';
import RefProvider from './context/RefContext.jsx';
import SingleProject from './pages/SingleProject.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/projects",
        element: <AllProjects />,
      },
      {
        path: '/projects/:title',
        element: <SingleProject />
      },      
      {},
      {},
    ]
  },
  {},
  {},
  {},
  {},
  {},
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RefProvider>
      <RouterProvider router={router} />
    </RefProvider>
  </StrictMode>,
)
