import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SearchBar from './Components/Searchbar/Searchbar'; 
import ITOfficer from './Pages/itofficer';
import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import FullUserdetails  from './Pages/FullUserdetails';
import Navigation from './Components/Navigation/Navigation';
import Navigation2 from './Components/Navigationbar2/Navigation2';
import Navigation3 from './Components/Navigation3/Navigation3';
import UpdateUserDetails from './Pages/UpdateUserDetails';
import UserPersona from './Components/UserPersona/UserPersona';
import FullUserPersona from './Pages/FullUserPersona';
import RadioButttonfull from './Components/RadioButttonfull/RadioButttonfull';
import Suspect from './Pages/Suspect';
import Registercrimefull from './Pages/Registercrimefull';
import RegisterVictimfull  from './Pages/RegisterVictimfull';
import RegisterEvidencefull from './Pages/RegisterEvidencefull';
import FullUpdateEvidence from './Pages/FullUpdateEvidence';
import FullRegisterCriminalSuspect from './Pages/FullRegisterCriminalSuspect';
import UpdateCrimeFull from './Pages/UpdateCrimeFull';
import UpdateVictimfull from './Pages/UpdateVictimFull';
import UpdateCriminalSuspectFull from './Pages/UpdateCriminalSuspectFull';
import UpdateExistingFull from './Pages/UpdateExistingFull';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ITofficer" element={<ITOfficer/>}/>
          <Route path="/RegistrationPage" element={<RegistrationPage/>}/>
          <Route path="/FullUserdetails"element={<FullUserdetails/>}/>
          <Route path='/UpdateUserDetails' element={<UpdateUserDetails/>}/>
          <Route path='/UserPersona' element={<UserPersona/>}/>
          <Route path='/FullUserPersona' element={<FullUserPersona/>}/>
          <Route path='/Suspect' element={<Suspect/>}/>
          <Route path='/Registercrimefull'element={<Registercrimefull/>}/>
          <Route path='/RegisterVictimfull' element={<RegisterVictimfull/>}/>
          <Route path='/RegisterEvidencefull' element={<RegisterEvidencefull/>}/>
          <Route path='/FullUpdateEvidence' element={<FullUpdateEvidence/>}/>
          <Route path='/FullRegisterCriminalSuspect'element={<FullRegisterCriminalSuspect/>}/>
          <Route path='/UpdateCrimeFull'element={<UpdateCrimeFull/>}/>
          <Route path='/UpdateVictimFull'element={<UpdateVictimfull/>}/>
          <Route path='/UpdateCriminalSuspectFull' element={<UpdateCriminalSuspectFull/>}/>
          <Route path='/UpdateExistingFull' element={<UpdateExistingFull/>}/>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
