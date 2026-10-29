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
import Four from "../Documentation/Academic/Four";
import Six from "../Documentation/Academic/Six";
import Seven from "../Documentation/Academic/Seven";
import Eight from "../Documentation/Academic/Eight";
import Nine from "../Documentation/Academic/Nine";
import Eleven from "../Documentation/Academic/Eleven";
import AcademicLayout from "../Documentation/Academic/AcademicLayout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [{ path: "/", element: <Home /> }],
  },

  {
    path: "/academic",
    element: <AcademicLayout />,
    children: [
      { path: "/academic", element: <Academic /> },
      { path: "/academic/Four", element: <Four /> },
      { path: "/academic/Five", element: <Four /> },
      { path: "/academic/Six", element: <Six /> },
      { path: "/academic/Seven", element: <Seven /> },
      { path: "/academic/Eight", element: <Eight /> },
      { path: "/academic/Nine", element: <Nine /> },
      { path: "/academic/Ten", element: <Nine /> },
      { path: "/academic/Eleven", element: <Eleven /> },
      { path: "/academic/Twelve", element: <Eleven /> },
    ],
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
    children: [{ path: "/search", element: <SearchContent /> }],
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
    path: "/*",
    element: <FourZeroFour />,
  },
]);
export default function Router() {
  return <div className="w-full">
  <RouterProvider router={route} />
  </div>
}
