import React from 'react';
import HandcraftedImage from './handcraft.jpg';
import RestorationImage from './2.jpg';
const Services = () => {
  return (
    <div className="services-section">
      <h2><b><i><u>Our Services</u></i></b></h2>
      <div className="service-container">
        <div className="service">
          <img src={HandcraftedImage} alt="Handcrafted Creations" className="service-image" />
          <div className="service-content">
            <h3><b><i>Handcrafted Creations</i></b></h3>
            <p>Discover a diverse collection of handcrafted pottery pieces, each designed and created with care by our skilled artisans.</p>
          </div>
        </div>
        <div className="service">
          <img src={RestorationImage} alt="Restoration and Repair" className="service-image" />
          <div className="service-content">
            <h3><b><i>Restoration and Repair</i></b></h3>
            <p>Have a cherished pottery piece in need of restoration? Our experts can bring new life to damaged items, preserving their beauty and history.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
