import React, { useState, useEffect } from 'react';
import './Sponsors.css'; // Import CSS file for styling
import tedxLogo from '../assets/tedx-logo-white.png';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const Sponsors = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    img1,
    img2,
    img3,
    tedxLogo,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentSlide, images.length]);

  return (
    <section id="sponsors" className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="text-uppercase section-heading">Our Sponsors</h2>
            <h3 className="text-muted section-subheading">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="carousel-container">
            {images.map((image, index) => (
              <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                <img src={image} alt={`Slide ${index}`} className="sponsor-logo" />
                {index === 2 && ( // Condition to check if it's the third image
                  <div className="img-overlay">
                    <h3 className="overlay-text">Buy 2 Get 1 Free</h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
