import React from 'react';
import '../Components.css';

function TableVictims() {
  return (
        <div className='registration-container-Crime-police'>
        <div className="registration-form-police">
        <div className="input-container-police">
          <label htmlFor="crimeID" className='p1-police'>Crime ID</label>
          <input className='display-box-po-6'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="crimeID" className='p1-police'>Life Status</label>
          <input className='display-box-po-6'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="crimeID" className='p1-police'>NIC</label>
          <input className='display-box-po-6'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="lifeStatus" className="p1-police">First Name</label>
          <input className='display-box-po-6'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="inCustody" className="p1-police">Last Name</label>
          <input className='display-box-po-6'/>
          </div>

        <div className="input-container-police">
          <label htmlFor="crimeJustified" className="p1-police">Telephone No</label>
          <input className='display-box-po-6'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="nicNumber" className='p1-police'>Province</label>
          <input className='display-box-po-6'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="lastName" className='p1-police'>City</label>
          <input className='display-box-po-6'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="telephoneNumber" className='p1-police'>Area</label>
          <input className='display-box-po-6'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="province" className='p1-police'>Address (optional)</label>
          <input className='display-box-po-6'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="city" className='p1-police'>Land Mark(optional)</label>
          <input className='display-box-po-7'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="area" className='p1-police'>Additional Description(about the Victim| optional)</label>
          <input className='display-box-po-7'/>
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

export default TableVictims;