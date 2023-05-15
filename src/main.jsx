import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import NavBar from './Navbar/NavBar.jsx';
import SkillPage from './Pages/SkillPage/SkillPage.jsx';
import Home from './Pages/Home/Home.jsx';
import LoginPage from './Pages/Login/Login.jsx';
import Register from './Pages/Login/Register.jsx';
import Profile from './Pages/Profile/Profile.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: '/home',
       element: <Home></Home> 
      },
      { path: '/skill', 
      element: <SkillPage></SkillPage> },
      {
        path:'login',
        element:<LoginPage></LoginPage>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'profile',
        element:<Profile></Profile>
      }
      
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
