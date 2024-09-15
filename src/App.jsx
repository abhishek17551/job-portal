
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/app-layout'
import Landing from './pages/landing'
import Onboarding from './pages/onboarding'
import JobListing from './pages/job-listing'
import PostJob from './pages/post-job'
import MyJobs from './pages/my-jobs'
import SavedJobs from './pages/saved-jobs'
import Job from './pages/job'
import { ThemeProvider } from './components/ui/theme-provider'

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/onboarding",
          element: (
            
              <Onboarding />
            
          ),
        },
        {
          path: "/jobs",
          element: (
            
              <JobListing />
            
          ),
        },
        {
          path: "/post-job",
          element: (
            
              <PostJob />
            
          ),
        },
        {
          path: "/my-jobs",
          element: (
            
              <MyJobs />
           
          ),
        },
        {
          path: "/saved-jobs",
          element: (
            
              <SavedJobs />
            
          ),
        },
        {
          path: "/job/:id",
          element: (
            
              <Job />
            
          ),
        },
      ],
    },
  ])

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router}/>
      </ThemeProvider>
    </>
  )
}

export default App
