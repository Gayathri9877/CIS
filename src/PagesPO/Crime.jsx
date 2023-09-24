import React from 'react';
import '../Styles.css';
import Name from '../ComponentsPO/Name';
import SubNavigationbar from '../ComponentsPO/SubNavigationbar';
import Sidebar from '../ComponentsPO/Sidebar';
import TableCrime from '../ComponentsPO/TableCrime';

function Crime() {
  return (
    <div className='crimecontainer'>
      <div className='namecrime'><Name/></div> 
       <div><SubNavigationbar/></div>
       <div><Sidebar/></div> 
        <div className='tablecrime'><TableCrime/></div>
      </div>
  );

};

export default Crime;