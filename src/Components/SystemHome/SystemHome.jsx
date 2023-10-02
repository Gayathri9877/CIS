import React, { useState } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import './SystemHome.css';

export default function SystemHome() {
  const sliderImages = [
    {
      url:
        'https://www.army.lk/sites/default/files/field/image/20190925_police_18.jpg',
    },
    {
      url:
        'https://i.aaj.tv/primary/2022/05/05202336846b68b.jpg',
    },
    {
      url:
        'https://www.sundaytimes.lk/201115/uploads/101.jpg',
    },
    {
      url:
        'https://static.dw.com/image/62534074_905.jpg',
    },
    {
      url:
        'https://www.hrw.org/sites/default/files/styles/opengraph/public/multimedia_images_2015/srilanka1015_reportcovermain.jpg?itok=BFx3Mkyi',
    },
  ];

  return (
    <div className="system-home">
      
      <div className="photo-box">
        <SimpleImageSlider
          width={'90%'}
          height={500}
          images={sliderImages}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={3}
          align-items={'center'}
        />
      </div>
      <h2 className='title'>Welcome to the Criminal Identification System</h2>
      <div className='section'>
        <div className='paras'>
          <p>A Sri Lankan criminal identification page refers to an official online platform or webpage maintained by the law enforcement or government authorities in Sri Lanka. This webpage serves as a centralized and digital repository for criminal identification and related information. It typically includes databases of individuals with criminal records, fingerprints, photographs, and other biometric data, allowing authorized users, such as law enforcement agencies, to efficiently access and verify the identities of individuals involved in criminal investigations, legal proceedings, or background checks. The Sri Lankan criminal identification page plays a crucial role in maintaining public safety, aiding law enforcement efforts, and ensuring the integrity of the criminal justice system in Sri Lanka.</p>
          <div className="desc-buttons">
            <button className="learn-more-button">
              Learn more
            </button>
          </div>
        </div>
        <div className=''>
          <img src="./assets/images/FaceGlitch.gif" alt="" srcset="" className='show'/>
        </div>
      </div>
      <h2 className='title'>Our Department</h2>
      <hr class="styled-line"></hr>
      <div className='section'>
      <div className=''>
          <img src="./assets/images/FaceGlitch.gif" alt="" srcset="" className='show1'/>
        </div>
        <div className='pol1'>
          <h6>"We must build bridges of trust between law enforcement and the public to create a safer society."</h6>
          <p className='po1'>
            <i>John Anderson</i>
            <br />
            <i>Cheif Police Officer</i>
          </p>
        </div>
        
      </div>
    </div>
  );
}
