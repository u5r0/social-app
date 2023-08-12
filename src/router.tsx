import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Home, Login, Profile, Register } from './pages'
import App from './App';

let currentUser: boolean
const ProtectedRoute = ({
  children 
}: {
  children: React.ReactNode
}) => {
  if (!currentUser) {
    return <Navigate to='/login' />
  }

  return children
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);