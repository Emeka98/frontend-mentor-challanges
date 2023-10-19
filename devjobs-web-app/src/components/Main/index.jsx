import React from 'react'
import data from '../../../data.json'
function Main() {
  return (
    <main className='bg-light-grey min-h-screen' >
        <div>
{/* Cards */}
    <div className='flex flex-col gap-[49px] mt-[97px] px-6'>
{/* Card */}
{data.map((card) => (
    <div key={card.id}>
        <h3>{card.company}</h3>
    </div>
))}
    </div>




        </div>
      
    </main>
  )
}

export default Main
