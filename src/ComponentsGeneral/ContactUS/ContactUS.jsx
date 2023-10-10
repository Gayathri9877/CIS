import React from 'react';
import './ContactUS.css';
import LocationSrc from './Assets/LocationSrc';



function ContactUs() {
  return (
    <div className='ContactUs-container'>
        <div>
        <h1 className='Maintopic-general-PO'>CONTACT US</h1>
        </div>
        <div className='topic-line'></div>
        <div>
          <div>
            ?<img src={LocationSrc} alt='location' className='Location-image'/>
          </div>
        </div>
    </div>
  );
};

export default ContactUs;
