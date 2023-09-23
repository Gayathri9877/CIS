import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import UpdateVictim from '../Components/UpdateVictim/UpdateVictim';
import Footer from '../Components/Footer/footer';


export default function UpdateVictimfull() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation/>
      <div style={{ flex: 1 }}>
        <UpdateVictim/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
