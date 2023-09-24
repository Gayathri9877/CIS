import React from 'react';
import '../Styles.css';
import Circle from '../ComponentsPO/CriminalPhoto';
import Name from '../ComponentsPO/Name';
import Rectangle from '../ComponentsPO/Rectangle';
import CapturesButton from '../ComponentsPO/CapturesButton';
import Sidebar from '../ComponentsPO/Sidebar';
import Table1 from '../ComponentsPO/Table1';

function SearchResult() {
  return (
    <div className='Searchresult-container'>
       <Circle/>
       <Rectangle/>
       <div className='sr'>
       <Name/>
       <CapturesButton/>
       <Sidebar/>
       <Table1/>
       </div>
      </div>
  );

};

export default SearchResult;