import { getJobs } from '@/APIs/job-api'
import JobCard from '@/components/JobCard'
import useFetch from '@/hooks/useFetch'
import { useUser } from '@clerk/clerk-react'
import { useEffect, useState } from 'react'
import { BarLoader } from 'react-spinners'

const JobListing = () => {
  const {user, isLoaded} = useUser()

  const [searchQuery,setSearchQuery] = useState('')
  const [location,setLocation] = useState('')
  const [companyID,setCompanyID] = useState('')

  const {
    fn:fnJobs,
    data:dataJobs,
    loading:loadingJobs
  } = useFetch(getJobs,{location,searchQuery,companyID})

  useEffect(() => {
    if(isLoaded) fnJobs()
  },[isLoaded,location,searchQuery,companyID])

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">Latest Jobs</h1>
      {
        loadingJobs && (
          <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />
        )
      }

      {
        loadingJobs === false && (
          <div  className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4"> 
            {
              dataJobs?.length ? (
                dataJobs.map((job) => {
                  return (
                  <JobCard key={job.id} job={job} savedInit={job.saved?.length > 0}/>
                  )
              
                })
              ) : (
                <div>No Jobs Found 😢</div>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default JobListing