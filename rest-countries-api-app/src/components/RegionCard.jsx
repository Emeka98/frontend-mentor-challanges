import React from 'react'
import { useNavigate } from "react-router-dom";

function RegionCard({country}) {
  const navigate = useNavigate();
  return (
    <div className='card' onClick={() => navigate(`country/${country.name}`) }>
      <div className="card-img-wrapper">
        <img src={country.flags.svg} alt={country.name} />
      </div>
      <div className="card-content">
        <h3 className='subtitle'>{country.name}</h3>
        <ul>
          <li><p><span className='bold'>Population: </span>{country.population.toLocaleString()}</p></li>
          <li><p><span className='bold'>Region: </span>{country.region}</p></li>
          <li><p><span className='bold'>Capital: </span>{country.capital}</p></li>
        </ul>
      </div>
    </div>
  )
}

export default RegionCard
