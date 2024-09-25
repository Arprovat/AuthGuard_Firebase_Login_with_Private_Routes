import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Login from './components/Login/Login.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import Private_auth from './components/Private-auth/Private_auth.jsx'
import Private_Route from './components/Private_Route/Private_Route.jsx'
import UserProfile from './components/profile/UserProfile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path:'/profile',
        element: <Private_Route><UserProfile></UserProfile></Private_Route>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Private_auth>
      <RouterProvider router={router}></RouterProvider>
    </Private_auth>
  </StrictMode>,
)
