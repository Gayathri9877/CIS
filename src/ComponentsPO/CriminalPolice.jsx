import React from 'react';
import '../Components.css'; 

 function CriminalPolice() {
  return (
    <div className='registration-container-police'>
        <div className="registration-form-police">
        <div className="input-container-police">
          <label htmlFor="crimeID" className='p1-police'>Criminal/Suspect ID</label>
          <div className='Display-box-police'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="lifeStatus" className="p1-police">Life Status</label>
          <div className='Display-box-police'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="inCustody" className="p1-police">In Custody?</label>
          <div className='Display-box-police'/>
          </div>

        <div className="input-container-police">
          <label htmlFor="crimeJustified" className="p1-police">Crime Justified?</label>
          <div className='Display-box-police'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="nicNumber" className='p1-police'>NIC Number</label>
          <div className='Display-box-police'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="firstName" className='p1-police'>First Name</label>
          <div className='Display-box-police'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="lastName" className='p1-police'>Last Name</label>
          <div className='Display-box-police'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="telephoneNumber" className='p1-police'>Telephone Number</label>
          <div className='Display-box-police'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="province" className='p1-police'>Province</label>
          <div className='Display-box-police'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="city" className='p1-police'>City</label>
          <div className='Display-box-police'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="area" className='p1-police'>Area</label>
          <div className='Display-box-police'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="address" className='p1-police'>Address</label>
          <div className='Display-box-police'/>
        </div>

        <div className="input-container-police">
          <label htmlFor="landMark" className='p1-police'>Landmark(optional)</label>
          <div className='Display-box-police'/>
        </div>

    	<div className="input-container-police">
   	 <label htmlFor="victimPhotos" className="p1-police">
      	Photos of Criminal
   	 </label>
  	</div>

    </div>
    </div>
  );
};

export default CriminalPolice;