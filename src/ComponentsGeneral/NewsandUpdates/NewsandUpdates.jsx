import './NewsandUpdates.css';
import React, { useState } from 'react';

function NewsandUpdates() {

    const [buttonClicked1, setButtonClicked1] = useState(false);
    const [buttonClicked2, setButtonClicked2] = useState(false);
    const [buttonClicked3, setButtonClicked3] = useState(false);

  const handleButtonClick1 = () => {
    setButtonClicked1(true);
  };
  const handleButtonClick2 = () => {
    setButtonClicked2(true);
  };
  const handleButtonClick3 = () => {
    setButtonClicked3(true);
  };

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
        <div style={{display: 'inline-block'}}>
        <p>CID Announces Breakthrough in High-Profile Cold Case Investigation </p>
        </div>
        
        </div>
        <div className='fac-readmore-two'>
        <img src="assets/images/factwoimage.png" alt="fac" className="fac-image" />
        </div>
        </div>

        <div style={{marginLeft: '137px', marginTop: '50px'}}>
        <h2 className='Maintopic-general-PO'>OTHER STORIES</h2>
        </div>

        <div className='second-announce-container'>
            <div className='sac-readmore'>
            <img src="assets/images/sacimage.png" alt="sac" className="sac-image" />
            <p style={{fontSize: '24px', fontWeight: 'medium', fontFamily: 'sans-serif', marginLeft: '40px', marginTop: '20px'}}>4 Person arrested in Kandy due to the drug dealing</p>
            </div>
            <div className='sac-readmore'>
            <img src="assets/images/sacimage.png" alt="sac" className="sac-image" /> 
            <p style={{fontSize: '24px', fontWeight: 'medium', fontFamily: 'sans-serif', marginLeft: '40px', marginTop: '20px'}}>4 Person arrested in Kandy due to the drug dealing</p>  
            </div>
            <div className='sac-readmore'>
            <img src="assets/images/sacimage.png" alt="sac" className="sac-image" />
            <p style={{fontSize: '24px', fontWeight: 'medium', fontFamily: 'sans-serif', marginLeft: '40px', marginTop: '20px'}}>4 Person arrested in Kandy due to the drug dealing</p>
            </div>
            <div className='sac-readmore'>
            <img src="assets/images/sacimage.png" alt="sac" className="sac-image" />
            <p style={{fontSize: '24px', fontWeight: 'medium', fontFamily: 'sans-serif', marginLeft: '40px', marginTop: '20px'}}>4 Person arrested in Kandy due to the drug dealing</p>
            </div>
        </div>

        <div style={{marginLeft: '137px', marginTop: '50px'}}>
        <h2 className='Maintopic-general-PO'>UPCOMING EVENTS</h2>
        </div>

        <div className='third-announce-container'>

        <div className='tac-clickhere'>
        <img src="assets/images/tacimage.png" alt="sac" className="tac-image" />
        <p style={{fontSize: '24px', fontWeight: 'medium', fontFamily: 'sans-serif', textAlign: 'center'}}>Interviews for the police officer position at kandy</p>
        <div>
        {buttonClicked1 ? (
            <p style={{fontSize: '18px', textAlign: 'center'}}>Interviews for the police officer position at kandy</p>
         ) : (
         <button onClick={handleButtonClick1} className='clickhere-tac'>Click Here</button>
          )}
        </div>
        </div>
        <div className='tac-clickhere'>
        <img src="assets/images/tacimage.png" alt="sac" className="tac-image" />
        <p style={{fontSize: '24px', fontWeight: 'medium', fontFamily: 'sans-serif', textAlign: 'center'}}>Interviews for the police officer position at kandy</p>
        <div>
        {buttonClicked2 ? (
            <p style={{fontSize: '18px', textAlign: 'center'}}>Interviews for the police officer position at kandy</p>
         ) : (
         <button onClick={handleButtonClick2} className='clickhere-tac'>Click Here</button>
          )}
        </div>
        </div>
        <div className='tac-clickhere'>
        <img src="assets/images/tacimage.png" alt="sac" className="tac-image" />
        <p style={{fontSize: '24px', fontWeight: 'medium', fontFamily: 'sans-serif', textAlign: 'center'}}>Interviews for the police officer position at kandy</p>
        <div>
        {buttonClicked3 ? (
            <p style={{fontSize: '18px', textAlign: 'center'}}>Interviews for the police officer position at kandy</p>
         ) : (
         <button onClick={handleButtonClick3} className='clickhere-tac'>Click Here</button>
          )}
        </div>
        </div>
        </div>

    </div>
  );
};


export default NewsandUpdates;