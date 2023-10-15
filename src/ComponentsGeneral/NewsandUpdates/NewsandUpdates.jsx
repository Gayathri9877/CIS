import React from 'react';
import './NewsandUpdates.css';

function NewsandUpdates() {
  return (
    <div className='NewsandUpdates-container'>
        <div className='News-topic-container'>
        <h1 className='Maintopic-general-PO'>NEWS AND UPDATES</h1>
        <div className='topic-line'></div>
        </div>
        <div style={{marginLeft: '137px'}}>
        <h2 className='Maintopic-general-PO'>TOP STORIES</h2>
        </div>
       
        <div className='first-announce-container'>
        <div className='fac-readmore-one'>
        <img src="assets/images/faconeimage.png" alt="fac" className="fac-image" />
        </div>
        <div className='fac-readmore-two'>
        <img src="assets/images/factwoimage.png" alt="fac" className="fac-image" />
        </div>
        </div>

        <div style={{marginLeft: '137px'}}>
        <h2 className='Maintopic-general-PO'>OTHER STORIES</h2>
        </div>

        <div className='second-announce-container'>
            <div className='sac-readmore-one'>
            <img src="assets/images/factwoimage.png" alt="fac" className="fac-image" />
            </div>
            <div className='sac-readmore-two'></div>
            <div className='sac-readmore-three'></div>
            <div className='sac-readmore-four'></div>
        </div>

        <div style={{marginLeft: '137px'}}>
        <h2 className='Maintopic-general-PO'>UPCOMING EVENTS</h2>
        </div>

        <div className='third-announce-container'>
        <div className='tac-clickhere-one'></div>
        <div className='tac-clickhere-two'></div>
        <div className='tac-clickhere-three'></div>
        </div>

    </div>
  );
};


export default NewsandUpdates;