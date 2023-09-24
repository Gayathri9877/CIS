import React from 'react';
import '../Styles.css';
import Name from '../ComponentsPO/Name';
import SubNavigationbar from '../ComponentsPO/SubNavigationbar';
import Sidebar from '../ComponentsPO/Sidebar';
import TableVictims from '../ComponentsPO/TableVictims';

function Victims() {
  return (
    <div className='Victims-container'>
       <Name/>
       <SubNavigationbar/>
       <Sidebar/>
       <div className='tv'><TableVictims/></div>
      </div>
  );

};

export default Victims;