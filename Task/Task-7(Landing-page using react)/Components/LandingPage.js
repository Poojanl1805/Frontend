import React from 'react';
import './LandingPage.css'; // Import the custom CSS file

const LandingPage = () => {
  const backgroundImage = "url('/bg-img.jpg')"; // Update this with the correct image path

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      backgroundImage: backgroundImage,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <header style={{ padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, color: '#fff' }}>
          Welcome to My Book Store
          <i className="fas fa-book-open" style={{ marginLeft: '10px' }}></i>
        </h1>
        <nav>
          <button className="nav-link">Home</button> | <button className="nav-link">About</button> | <button className="nav-link">Contact</button> | <button className="nav-link">Services</button>
        </nav>
      </header>
      <main>
        <section className="white-section"> {/* Add a class to target this section */}
          <h2 className="white-text">Discover Amazing Books</h2> {/* Add a class to target this text */}
          <p className="white-text">"Today a reader, tomorrow a leader." – Margaret Fuller.</p>
          <button className="discover-button">Explore</button> {/* Add a class to target this button */}
        </section>
      </main>
      <footer style={{ padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff' }}>
        <p>&copy; 2023. All rights reserved to N.L.Pooja.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
