import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import RegisterCriminalSuspect from '../Components/RegisterCriminalSuspect/RegisterCriminalSuspect';
import Footer from '../Components/Footer/footer';


export default function RegisterCriminalSuspectFull() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation/>
      <div style={{ flex: 1 }}>
        <RegisterCriminalSuspect/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
