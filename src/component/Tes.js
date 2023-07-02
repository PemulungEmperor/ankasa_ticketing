import React, { useEffect } from 'react'
//redux
import { useSelector } from 'react-redux'


const Tes = () => {
    
const { dataFlights } = useSelector(state=>state.flightData)

return (
    <div>
      {dataFlights.map((data)=> (
        <h1 key={data.id}>Tes Data : {data.airlines}</h1>
      ))}
    </div>
  )
}

export default Tes
