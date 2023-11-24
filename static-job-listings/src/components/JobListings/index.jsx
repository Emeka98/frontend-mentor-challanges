import React,{useState} from 'react'
import Header from './Header'
import Jobs from './Jobs'
function JobListings({data}) {


  return (
    <div className='flex flex-col w-full min-h-screen '>
    <Header />
    <Jobs data={data}  />
    </div>
  )
}

export default JobListings
