import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import UpdateCriminalSuspect from '../Components/UpdateCriminalSuspect/UpdateCriminalSuspect';
import Footer from '../Components/Footer/footer';


export default function UpdateCriminalSuspectFull() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation/>
      <div style={{ flex: 1 }}>
        <UpdateCriminalSuspect/>
      </div>
      <div style={{ flex: 0 }}>
        <Footer/>
      </div>
    </div>
  );
}

  