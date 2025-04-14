import React, { useState, useEffect } from 'react';
import movie1 from './movie1.jpg';
import movie2 from './movie2.jpg';
import movie3 from './movie3.jpg';
import './CouponSlide.css';

const images = [movie1, movie2, movie3];

function CouponSlide() {
  const [index, setIndex] = useState(0);

  function incrementIndex(event) {
    if (event) {
      event.preventDefault();
    }
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }

  function decrementIndex(event) {
    if (event) {
      event.preventDefault();
    }
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      incrementIndex();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div
      style={{
        backgroundImage: `url(${images[index]})`,
        position: 'relative',
        paddingLeft: '21vw',
        height: '400px',
        marginTop: '50px',
        width: '78vw',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 0.5s ease-in-out',
        border: '3px solid yellow',
        borderRadius: '15px',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.005)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <button className="leftbutton" onClick={decrementIndex}>←</button>
      <button className="rightbutton" onClick={incrementIndex}>→</button>
    </div>
  );
}

export default CouponSlide;