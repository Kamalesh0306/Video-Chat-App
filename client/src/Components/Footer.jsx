import React from 'react';
import user from '../images/user.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <img src={user} className="homeimg" alt="home-img"/>
            
        <h2>Contact</h2>
        <br></br>
        
        <address>
          videosphere01@gmail.com<br />9946721345
              
          <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
        </address>
      </div>
      
      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Media</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Facebook</a>
            </li>

            <li>
              <a href="#">Instagram</a>
            </li>
                
            <li>
              <a href="#">GitHub</a>
            </li>
          </ul>
        </li>
        
        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Support</h2>
          
          <ul className="nav__ul nav__ul--extra">
            <li>
              <a href="#">Help Center</a>
            </li>
            
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Screen Sharing</a>
            </li>
            <li>
              <a href="#">Voice Calls</a>
            </li>
            
          </ul>
        </li>
        
        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>
          
          <ul className="nav__ul">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            
            <li>
              <a href="#">Terms of Use</a>
            </li>
            
            <li>
              <a href="#">Cookies Policy</a>
            </li>
          </ul>
        </li>
      </ul>
      
      <div className="legal">
        <p>&copy; 2024 Kamalesh. All rights reserved.</p>
        
        <div className="legal__links">
          <span>Made with <span className="heart">💙</span>from ASH GUNASEKARAN</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
