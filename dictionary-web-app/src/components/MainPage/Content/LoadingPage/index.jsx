import React from 'react'
import { FadeLoader } from "react-spinners";


function LoadingPage() {
  return (
    <div className='flex justify-center  mt-32'>

      <FadeLoader color={"#123abc"}   />
    </div>
  )
}

export default LoadingPage
