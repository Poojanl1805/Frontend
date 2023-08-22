import React from 'react';
import './Home.css';
import Navbar from './Navbar';

const Home = () => {
  return (
    <section id="home" className="section home-content">
      <h1><b><i>Welcome <br /> to <br /> Home Page</i></b></h1>
    </section>
  );
};

const Career = () => {
  return (
    <section id="career" className="section career-content">
      <h1><b><i>Welcome <br /> to <br /> Career Page</i></b></h1>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section about-content">
      <h1><b><i>Welcome <br /> to <br /> About Us Page</i></b></h1>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section contact-content">
      <h1><b><i>Welcome <br /> to <br /> Contact Us Page</i></b></h1>
    </section>
  );
};

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <main className="main-content">
        <div className="section-container align-right">
          <Home />
          <Career />
          <About />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;