import ReactDOM from "react-dom/client"
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header"
import Hero from "./components/HeroSection"
import Foods from './components/Foods'

import { createBrowserRouter,RouterProvider } from "react-router-dom";
import LoginForm from "./components/Login";
import SignUpForm from "./components/SignUp";


function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <><App /></>,
//     },
//     {
//       path: "./login",
//       element: <><LoginForm /></>,
//     },
//     {
//       path: "./signup",
//       element: <><SignUpForm /></>,
//     }
// ])


  return(
    <>
    
      <Header/>
      <Hero/>
      <Foods/>
      {/* <RouterProvider router={router}/> */}
    </>
  )
}

export default App
