import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

// React Router v7 Data Mode (createBrowserRouter)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects/:id',
    element: <ProjectDetail />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
