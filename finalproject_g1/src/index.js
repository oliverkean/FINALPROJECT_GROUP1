import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import reportWebVitals from './reportWebVitals';

// Pages
import LandingPage from "./Pages/LandingPage";
import References from "./Pages/References";
import LearnMore from './Pages/LearnMore';
import About from "./Pages/About";



// routes
const router = createBrowserRouter([
  // landing page route
  {
    path: "/",
    element: <LandingPage/>,
  },
  // references route
  {
    path: '/references',
    element: <References/>,
  },
  // learn more route
  {
    path: '/learn-more',
    element: <LearnMore/>,
  },
  // about route
  {
    path: '/about',
    element: <About/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
