import React, { useEffect }from 'react';
import axios from "axios";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react';


const Navbar = () => {

  const url = "https://api.open-meteo.com/v1/forecast?latitude=18.10&longitude=77.29&hourly=temperature_2m"

  useEffect(() => {

    axios.get(url)
    .then((res) => {
      console.log(res)
    })
  }, [])
  
  
 

  return (
    <div>
 <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href='/Attendees'>Attendees</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/FamilyTree'>FamilyTree</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/ThingsToDo'>Things To Do</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/Jamaica'>Jamaica</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/Chat'>Chat</BreadcrumbLink>
  </BreadcrumbItem>


</Breadcrumb>
    </div>
  )
}

export default Navbar