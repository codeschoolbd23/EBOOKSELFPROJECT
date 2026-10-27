import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../Documentation/Layout/Home/Home';
import Layout from './../Documentation/Layout/Layout';
import ErrorBoundary from './ErrorBoundary';
import AICHAT from './../Documentation/AICHAT/AICHAT';
import FourZeroFour from './FourZeroFour';
import Search from "../Utilities/search/Search";
import SearchContent from "../Utilities/search/SearchContent";
import Academic from "../Documentation/Academic/Academic";
import University from './../Documentation/Academic/University';
import Jobs from './../Documentation/NoneAcademic/Jobs/Jobs';
import Religion from './../Documentation/NoneAcademic/Religion/Religion';
import Others from './../Documentation/NoneAcademic/Others/Others';
import About from './../Documentation/Shared/about/About';
import BookList from './../Documentation/GoogleDrive/BookList';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
   errorElement:<ErrorBoundary/>,
    children: [
      { path: "/", element: <Home /> },
      
    ],
  },
  
  {
    path: "/academic",
    element: <Academic />,
   
  },
 
  {
    path: "/university",
    element: <University />,
   
  },
  {
    path: "/job",
    element: <Jobs />,
   
  },
  {
    path: "/religion",
    element: <Religion />,
   
  },
  {
    path: "/other",
    element: <Others />,
   
  },
  {
    path: "/search",
    element: <Search />,
    children:[
      {path:"/search",element:<SearchContent/>}
    ]
   
  },
  {
    path: "/aichat",
    element: <AICHAT />,
   
  },
  {
    path: "/about",
    element: <About />,
   
  },
  {
    path: "/drive",
    element: <BookList />,
   
  },
  {
    path:"/*",
    element:<FourZeroFour/>
  }
]);
export default function Router() {
  return <div className="container border-0 m-0 p-0">
  <RouterProvider router={route} />
  </div>
}
