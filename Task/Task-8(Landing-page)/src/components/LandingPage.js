import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './LandingPage.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import LoginForm from './LoginForm';
const LandingPage = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 overflow-hidden">
        <header className="navbar navbar-expand-sm navbar-dark bg-dark py-2">
          <div className="container d-flex justify-content-between align-items-center">
            <Link to="/" className="navbar-brand">
              Clay Fusion Gallery <i className="fas fa-shopping-cart ms-2" style={{ fontSize: '24px' }}></i>
            </Link>
            <div > 
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto align-items-center">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/services" className="nav-link">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/login" className="nav-link login-register-button">Login or Register</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-grow-1 overflow-hidden">
          <Routes>
            <Route path="/" element={<HomeWithCarousel />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const HomeWithCarousel = () => {
  return (
    <>
      <HomeCarousel />
      <Outlet />
    </>
  );
};

const HomeCarousel = () => {
  return (
    <section className="carousel-section">
      <Carousel>
        <div>
          <div className="carousel-image">
            <img src="https://img.freepik.com/free-photo/earthenware-pottery-vase-with-terracotta-decoration-outdoors-generated-by-ai_188544-38930.jpg?size=626&ext=jpg&ga=GA1.2.1733780232.1689774451&semt=ais" alt="Carousel Image 1" />
            <h1><q><i><b>A Place for Handmade Ceramics and Pottery</b></i></q></h1>
            <p>
            <i><b>Clay Fusion Gallery is a creative haven where art and craftsmanship converge in a harmonious blend.
              Clay Fusion’s vision is to revive the traditional art of pottery and thereby create contemporary products for sustainable livelihood.
              Her simple designs and raw expressions take you through her journey of over 45 years of ceramics.We have wide varities of collections.</b></i>
            </p>
            <button className="know-more-button">Know More</button>
          </div>
        </div>
        <div>
          <div className="carousel-image">
            <img src="https://img.freepik.com/free-photo/sculptor-artist-working-with-clay-studio_23-2149986256.jpg?size=626&ext=jpg&ga=GA1.2.1733780232.1689774451&semt=ais" alt="Carousel Image 2" />
          </div>
        </div>
        <div>
          <div className="carousel-image">
            <img src="https://img.freepik.com/premium-photo/vibrant-colors-pottery-collection-showcase-indigenous-cultures-creativity-generated-by-artificial-intelligence_24640-117930.jpg?size=626&ext=jpg&ga=GA1.2.1733780232.1689774451&semt=ais" alt="Carousel Image 3" />
          </div>
        </div>
        <div>
          <div className="carousel-image">
            <img src="https://img.freepik.com/free-photo/antique-amphora-ornate-pottery-souvenir-decoration-craft-generated-by-ai_188544-10807.jpg?size=626&ext=jpg&ga=GA1.2.1733780232.1689774451&semt=ais" alt="Carousel Image 4" />
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default LandingPage;
