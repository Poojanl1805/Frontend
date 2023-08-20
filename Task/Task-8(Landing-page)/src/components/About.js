import React from 'react';
import aboutImage from './pic.jpeg'; 
const About = () => {
  return (
      <section className="about-content">
        <div className="about-image right">
          <img src={aboutImage} alt="About Us" />
        </div>
        <div className="about-text">
          <h2><u>About Clay Fusion Gallery</u></h2>
          <br />
          <p>
            <i><b>Welcome to Clay Fusion Gallery, where art and craftsmanship come together in beautiful harmony. With a legacy spanning over 45 years, we are dedicated to reviving the timeless tradition of pottery and ceramics. Our founder's passion for raw expression and simple designs guides our journey towards creating contemporary pieces that capture the essence of artistry and innovation.
            At Clay Fusion, we believe in the power of creativity to transform clay into masterpieces that reflect indigenous cultures, creativity, and vibrant colors. Our diverse collection showcases the dedication and skill of our artisans, blending the past with the present to craft pieces that inspire, delight, and enrich the soul.
            Join us on this artistic journey as we continue to shape history with each sculpted piece. Whether you're an art enthusiast, a collector, or someone seeking the perfect gift, Clay Fusion Gallery welcomes you to explore the world of handmade ceramics and pottery. Discover the magic of craftsmanship that transcends time and connects cultures.</b></i>
          </p>
        </div>
      </section>
  );
}

export default About;
