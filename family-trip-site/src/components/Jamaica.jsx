import axios from 'axios';
import React from 'react'

const Jamaica = () => {

  const url = "https://api.open-meteo.com/v1/forecast?latitude=18.10&longitude=77.29&hourly=temperature_2m"

  const weather = axios.get(url, (req,res) => {
    
  })

  return (
    <div>Jamaica</div>
  )
}

export default Jamaica