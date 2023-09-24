import React from 'react';
import '../Styles.css';
import Name from '../ComponentsPO/Name';
import SubNavigationbar from '../ComponentsPO/SubNavigationbar';
import Sidebar from '../ComponentsPO/Sidebar';
import TableEvidences from '../ComponentsPO/TableEvidences';

function Evidences() {
  return (
    <div className='Evidences-container'>
       <Name/>
       <SubNavigationbar/>
       <Sidebar/>
       <div className='te'><TableEvidences/></div>
      </div>
  );

};

export default Evidences;