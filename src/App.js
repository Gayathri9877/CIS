import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import TopicBox from './Components/TopicBox/TopicBox';
import NavigationBar from './Components/Navigation/Navigation';
import Footer from './Components/Footer/footer';
import SearchBar from './Components/Searchbar/Searchbar'; 
import ITOfficer from './Pages/itofficer';
import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import FullUserdetails  from './Pages/FullUserdetails';
import Navigation2 from './Components/Navigationbar2/Navigation2';
import UpdateUser from './Components/UpdateUser/UpdateUser';
import UpdateUserDetails from './Pages/UpdateUserDetails';
import UserPersona from './Components/UserPersona/UserPersona';
import FullUserPersona  from './Pages/fullUserPersona';
import UpdateCriminalSuspect from './Components/UpdateCriminalSuspect/UpdateCriminalSuspect';
import Suspect from './Pages/Suspect';
import RegisterCrime from './Components/RegisterCrime/RegisterCrime';
import Registercrimefull from './Pages/Registercrimefull';
import RegisterVictim from './Components/RegisterVictim/RegisterVictim';
import RegisterVictimfull  from './Pages/RegisterVictimfull';
import RegisterEvidence from './Components/RegisterEvidence/RegisterEvidence';
import RegisterEvidencefull from './Pages/RegisterEvidencefull';
import UpdateEvidence from './Components/UpdateEvidence/UpdateEvidence';
import UpdateEvidenceFull from './Pages/UpdateEvidenceFull';
import RegisterCriminalSuspect from './Components/RegisterCriminalSuspect/RegisterCriminalSuspect';
import RegisterCriminalSuspectFull from './Pages/RegisterCriminalSuspectFull';
import UpdateRegisterCrime from './Components/UpdateRegisterCrime/UpdateRegisterCrime';

         

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/TopicBox' element={<TopicBox/>}/>
          <Route path="/Navigation" element={<NavigationBar />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/ITofficer" element={<ITOfficer/>}/>
          <Route path="/SearchBar" element={<SearchBar/>}/>
          <Route path="/RegistrationPage" element={<RegistrationPage/>}/>
          <Route path="/FullUserdetails"element={<FullUserdetails/>}/>
          <Route path='/Navigation2' element={<Navigation2/>}/> 
          <Route path='/UpdateUser' elements={<UpdateUser/>}/>
          <Route path='/UpdateUserDetails' element={<UpdateUserDetails/>}/>
          <Route path='/UserPersona' element={<UserPersona/>}/>
          <Route path='/FullUserPersona' element={<FullUserPersona/>}/>
          <Route path='/UpdateCriminalSuspect' element={<UpdateCriminalSuspect/>}/>
          <Route path='/Suspect' element={<Suspect/>}/>
          {/* <Route path='/RegisterCrime' element={<RegisterCrime/>}/>
          <Route path='/Registercrimefull'element={<Registercrimefull/>}/>
          <Route path='/RegisterVictim' element={<RegisterVictim />} />
          <Route path='/RegisterVictimfull' element={<RegisterVictimfull/>}/>
          <Route path='/RegisterEvidence' element={<RegisterEvidence/>}/>
          <Route path='/RegisterEvidencefull' element={<RegisterEvidencefull/>}/>
          <Route path='/UpdateEvidence' element={<UpdateEvidence/>}/>
          <Route path='/UpdateEvidenceFull' element={<UpdateEvidenceFull/>}/>
          <Route path='/RegisterCriminalSuspect' element={<RegisterCriminalSuspect/>}/>
          <Route path='/RegisterCriminalSuspectFull' element={<RegisterCriminalSuspectFull/>}/>
          <Route path='/UpdateRegisterCrime' element={<UpdateRegisterCrime/>}/> */}
          

          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
