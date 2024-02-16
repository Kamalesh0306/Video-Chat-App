import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id = "about" className="about-section">
      <div className="about-content">
        <h1 className='fancy1'>About Us</h1>
        <p>
        Welcome to our video call application! We are committed to providing a seamless and secure video communication experience for our users.
        Our mission is to connect people around the world through high-quality video calls, fostering collaboration, communication, and meaningful connections.
        </p>
        <p>
          Our mission is to contribute to the well-being of our community by facilitating easy
          access to COVID vaccinations. Feel free to explore our website and book your slot today.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;