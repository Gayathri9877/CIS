import React from 'react';
import './footer.css';
import { useLocation } from 'react-router-dom';


const Footer = () => {
 
  const openSocialLink = (url) => {
    window.open(url, '_blank'); 
  };


  const location = useLocation();
  const hideNavBarOnPaths = [
 
    '/SignInGeneral',
    
    // Add more paths as needed
  ];

  // Check if the current path is in the list of paths to hide the navigation bar
  const shouldHideFooter = hideNavBarOnPaths.includes(location.pathname);

  if (shouldHideFooter) {
    return null; // Return null to hide the navigation bar
  }


  return (
    <footer className="footer ">
      <div className="column">
      <div className="icon">
          <img src='assets\images\finger-print.png' alt='finger-print' className='logo1' />
        
        <div className="text01">CIS</div></div>
        <div className="two-line-text">
          <div className="text02">Criminal Identification System</div>
          <div className="text02">Sri Lanka Police</div>
        </div>
        <div className="text03">2023@cis.police.lk All rights reserved.</div>
        
        </div>

      <div className="column">
        <div className="title">Quick Links</div>
        <div className="link">Home Page</div>
        <div className="link">About Us Page</div>
        <div className="link">News & Updates</div>
        <div className="link">FAQ and Help</div>
        <div className="link">Legal and Privacy</div>
      </div>
      <div className="column">
        <div className="title">Contact Us</div>
        <div className="textt"> Email</div>
        <div className="subpart">cis@slpolice.lk</div>
        <div className="text"> Phone Number</div>
        <div className="subpart">0711234567</div>
      </div>
      <div className="column">
        <div className="title">Social Media</div>

        <div className="social-links">
          {/* Facebook */}
          <div className="social-link" onClick={() => openSocialLink('https://www.facebook.com/sl_policemedia')}>
            <img src='assets\images\facebook.png' alt='Facebook' className='social-img' />
            <span className="social-link-text">Facebook</span>
          </div>

          {/* Instagram */}
          <div className="social-link" onClick={() => openSocialLink('https://www.instagram.com/sl_policemedia')}>
            <img src='assets\images\instagram.png' alt='Instagram' className='social-img' />
            <span className="social-link-text">Instagram</span>
          </div>

          {/* TikTok */}
          <div className="social-link" onClick={() => openSocialLink('https://www.tiktok.com/sl_policemedia')}>
            <img src='assets\images\tiktok.png' alt='TikTok' className='social-img' />
            <span className="social-link-text">TikTok</span>
          </div>

          {/* Twitter */}
          <div className="social-link" onClick={() => openSocialLink('https://www.twitter.com/sl_policemedia')}>
            <img src='assets\images\twitter.png' alt='Twitter' className='social-img' />
            <span className="social-link-text">Twitter</span>
          </div>

          {/* YouTube */}
          <div className="social-link" onClick={() => openSocialLink('https://www.youtube.com/sl_policemedia')}>
            <img src='assets\images\youtube.png' alt='YouTube' className='social-img' />
            <span className="social-link-text">YouTube</span>
          </div>
        </div>
      </div>
  
    </footer>
  );
};
export default Footer;