import React from 'react'
import ReactDOM from 'react-dom/client'

import { Login, Register } from './pages'
import App from './App.tsx'
import './index.scss'

import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);  

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
      <App />
  </React.StrictMode>,
)
