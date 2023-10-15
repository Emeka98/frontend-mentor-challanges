import React from 'react'

function Button({children , ...props}) {
  return (
  <button {...props} className='bg-gradient-to-br from-green-400 to-blue-500 font-bold text-white text-sm w-40 h-11 rounded-[22px] hover:opacity-40 leading-7'>
    {children}
  </button>
  )
}

export default Button
