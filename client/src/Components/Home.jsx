import React from 'react';
import { Link } from "react-router-dom";
import dose from "../images/vi (2).jpg";
import AboutSection from './AboutSection';
import FAQSection from './FAQSection';
import Footer from './Footer';
import "./Home.css";
import Navbar from './NavBar';


function Home() {
  return ( 
    <>
    <Navbar/>
     <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>Your presence, <br />Our priority: <strong className="brand-name">Making video calls<br/> Seamless!</strong></h1>
              <div className="mt-3">
                <Link to="/getstarted" className="btn-get-started">Get Started</Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src={dose} className="img-fluid home-img" alt="home-img"/>
            </div>
          </div>
          </div>
        </div>
      </div>
     </section>
     <br></br>
     <br></br>
     <br></br>
     <section>
        <AboutSection />
      </section>
     <section>
        <FAQSection />
      </section>
      <br></br>
      <br></br>
    <section>
        <Footer/>
     
    </section>
    </>
  )
}

export default Home
