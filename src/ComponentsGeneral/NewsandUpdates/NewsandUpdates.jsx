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

        </div>
        <div style={{marginLeft: '137px'}}>
        <h2 className='Maintopic-general-PO'>OTHER STORIES</h2>
        </div>
        <div className='second-announce-container'>

        </div>
        <div style={{marginLeft: '137px'}}>
        <h2 className='Maintopic-general-PO'>UPCOMING EVENTS</h2>
        </div>
        <div className='third-announce-container'>

        </div>
    </div>
  );
};


export default NewsandUpdates;