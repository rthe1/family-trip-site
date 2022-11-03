import { Routes, Route } from 'react-router-dom';
import Attendees from './components/Attendees';
import ThingsToDo from './components/ThingsToDo';
import Chat from './components/Chat';
import Jamaica from './components/Jamaica';
import FamilyTree from './components/FamilyTree';

const NavbarRoutes = () => {
return (         
    <Routes>
    <Route path='/Attendees' element={<Attendees/>} />
    <Route path='/ThingsToDo' element={<ThingsToDo/>} />
    <Route path='/Chat' element={<Chat/>} />
    <Route path='/FamilyTree' element={<FamilyTree/>} />
    <Route path='/Jamaica' element={<Jamaica/>} />
  </Routes>
);
}
export default NavbarRoutes;