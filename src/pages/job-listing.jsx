import { getJobs } from '@/APIs/job-api'
import { useSession } from '@clerk/clerk-react'
import React, { useEffect } from 'react'

const JobListing = () => {
  const {session} = useSession()

  const fetchJobs = async () => {
    const supabaseAccessToken = await session.getToken({
      template : 'supabase'
    })
    const data = await getJobs(supabaseAccessToken)
    console.log(data)
  }

  useEffect(() => {
    fetchJobs()
  })
  return (
    <div>
      Job listing
    </div>
  )
}

export default JobListing