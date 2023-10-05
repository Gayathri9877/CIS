import React from 'react';
import '../Components.css';

function TableEvidences() {
  return (
    <div className='registration-container-Crime-police'>
    <div className="registration-form-police">
    <div className="input-container-police">
      <label htmlFor="crimeID" className='p1-police'>Crime ID</label>
      <input className='display-box-po-3'/>
    </div>

    <div className="input-container-police">
      <label htmlFor="crimeID" className='p1-police'>Evidence ID</label>
      <input className='display-box-po-3'/>
    </div>

    <div className="input-container-police">
      <label htmlFor="area" className='p1-police'>Testimonial(about the Evidence| optional)</label>
      <input className='display-box-po-4'/>
    </div>

  <div className="input-container-police">
  <label htmlFor="victimPhotos" className="p1-police">
    Photos of the crime
  </label>
</div>
</div>
</div>
  );
};

export default TableEvidences;