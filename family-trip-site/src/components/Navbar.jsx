import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react';


const Navbar = () => {
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