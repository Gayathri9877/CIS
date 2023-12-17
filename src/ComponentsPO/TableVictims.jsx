import React from 'react';
import '../Components.css';

function TableVictims() {
  return (
        <div className='registration-container-Crime-police'>
        <div className="registration-form-police">
        <div className="input-container-police">
          <label htmlFor="crimeID" className='p1-police'>Crime ID</label>
          <div style={{width:'530px', minHeight:'40px', backgroundColor:'#e0e1fc'}}></div>
        </div>

        <div className="input-container-police">
          <label htmlFor="crimeID" className='p1-police'>Life Status</label>
          <div style={{width:'530px', minHeight:'40px', backgroundColor:'#e0e1fc'}}></div>
        </div>

        <div className="input-container-police">
          <label htmlFor="crimeID" className='p1-police'>NIC</label>
          <div style={{width:'530px', minHeight:'40px', backgroundColor:'#e0e1fc'}}></div>
        </div>

        <div className="input-container-police">
          <label htmlFor="lifeStatus" className="p1-police">First Name</label>
          <div style={{width:'530px', minHeight:'40px', backgroundColor:'#e0e1fc'}}></div>
        </div>

        <div className="input-container-police">
          <label htmlFor="inCustody" className="p1-police">Last Name</label>
          <div style={{width:'530px', minHeight:'40px', backgroundColor:'#e0e1fc'}}></div>
          </div>

        <div className="input-container-police">
          <label htmlFor="crimeJustified" className="p1-police">Telephone No</label>
          <div style={{width:'530px', minHeight:'40px', backgroundColor:'#e0e1fc'}}></div>
        </div>

        <div className="input-container-police">
          <label htmlFor="nicNumber" className='p1-police'>Province</label>
          <div style={{width:'530px', minHeight:'40px', backgroundColor:'#e0e1fc'}}></div>
        </div>

        <div className="input-container-police">
          <label htmlFor="lastName" className='p1-police'>City</label>
          <div style={{width:'530px', minHeight:'40px', backgroundColor:'#e0e1fc'}}></div>
        </div>

        <div className="input-container-police">
          <label htmlFor="telephoneNumber" className='p1-police'>Area</label>
          <div style={{width:'530px', minHeight:'40px', backgroundColor:'#e0e1fc'}}></div>
        </div>

        <div className="input-container-police">
          <label htmlFor="province" className='p1-police'>Address (optional)</label>
          <div style={{width:'530px', minHeight:'40px', backgroundColor:'#e0e1fc'}}></div>
        </div>

        <div className="input-container-police">
          <label htmlFor="city" className='p1-police'>Land Mark(optional)</label>
          <div style={{width:'530px', minHeight:'40px', backgroundColor:'#e0e1fc'}}></div>
        </div>

        <div className="input-container-police">
          <label htmlFor="area" className='p1-police'>Additional Description</label>
          <div style={{width:'530px', minHeight:'40px', backgroundColor:'#e0e1fc'}}></div>
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