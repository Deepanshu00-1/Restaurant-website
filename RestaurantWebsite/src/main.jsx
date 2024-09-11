import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from "./Redux/Store.js"
import {Provider} from 'react-redux'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import LoginForm from './components/Login.jsx'
import SignUpForm from './components/SignUp.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <><App /></>,
//   },
//   {
//     path: "./login",
//     element: <><LoginForm /></>,
//   },
//   {
//     path: "./signup",
//     element: <><SignUpForm /></>,
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    {/* <RouterProvider router={router}/> */}
    </Provider>,
  </React.StrictMode>,
)
