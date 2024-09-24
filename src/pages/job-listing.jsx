import { getJobs } from '@/APIs/job-api'
import useFetch from '@/hooks/useFetch'
import { data } from 'autoprefixer'
import { useEffect } from 'react'

const JobListing = () => {
  const {
    fn:fnJobs,
    data:dataJobs,
    loading:loadingJobs
  } = useFetch(getJobs,{})

  useEffect(() => {
    fnJobs()
  },[])

  console.log(dataJobs)
  return (
    <div>
      Job listing
    </div>
  )
}

export default JobListing