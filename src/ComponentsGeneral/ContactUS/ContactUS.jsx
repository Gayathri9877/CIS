import React from 'react';
import './ContactUS.css';
import LocationImage from '../../Assets/location.png';
import PhoneImage from '../../Assets/phone.png';
import EmailImage from '../../Assets/email.png';
import MapImage from '../../Assets/map.png';

function ContactUS() {
  return (
    <div className='ContactUs-container'>
        <div className='Contact-topic-container'>
        <h1 className='Maintopic-general-PO'>CONTACT US</h1>
        <div className='topic-line'></div>
        </div>
        <div className='contact-details-container'>
          <div className='contact1'>
            <img src={LocationImage} alt='Location' className='Location-image'/>
            <p1>No 123, Karunarathna Road, Battaramulla.</p1>
          </div>
          <div className='contact2'>
            <img src={PhoneImage} alt='Phone' className='Phone-image'/>
            <p2>071 123 4567</p2>
          </div>
          <div className='contact3'>
            <img src={EmailImage} alt='Email' className='Email-image'/>
            <p3>cis@slpolice.lk</p3>
          </div>
        </div>
        <div>
        <img src={MapImage} alt='Map' className='Map-image'/>
        </div>
        <div className='ASKQUERIES-container'>
        <h2 className='Maintopic-general-PO'>ASK QUERIES</h2>
        <div className='topic-line'></div>
        </div>

      <div className='askqueries-message-container'>
        <div>
          <label htmlFor="name" className="label-askqueries">Name</label>
          <input type="text" id="name" className="input-askqueries" />
        </div>
        <div>
          <label htmlFor="email" className="label-askqueries">Email</label>
          <input type="text" id="email" className="input-askqueries" />
        </div>
        <div>
          <label htmlFor="comments" className="label-askqueries">Comments</label>
          <textarea id="comments" className="textarea-askqueries" rows="4"></textarea>
        </div>
        <button className="send-button-askqueries">Send</button>
        <div className="response-message-askqueries">Response will be sent to your respective email.</div>
      </div>

    </div>
  );
};

export default ContactUS;
