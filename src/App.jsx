import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from './pages/Home'

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects/:id',
    element: (
      <Suspense fallback={null}>
        <ProjectDetail />
      </Suspense>
    ),
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
