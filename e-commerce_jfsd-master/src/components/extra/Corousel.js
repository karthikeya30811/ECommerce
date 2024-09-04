import React, { useState, useEffect, useRef } from 'react';
import './Corousel.css'
function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const myCarousel = useRef(null);
  const carouselThumbs = useRef(null);

  
  useEffect(() => {
    if (myCarousel.current && carouselThumbs.current) {
      const handleSlide = (e) => {
        const index = parseInt(e.relatedTarget.getAttribute('data-bs-slide-to'), 10);
        setActiveIndex(index);
      };

      myCarousel.current.addEventListener('slid.bs.carousel', handleSlide);

      return () => {
        myCarousel.current.removeEventListener('slid.bs.carousel', handleSlide);
      };
    }
  }, []);

  const handleThumbsClick = (index) => () => {
    setActiveIndex(index);
  };
  

  // Add your carousel items here
  const carouselItems = [
    <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`} key={0}>
      <img
        src="https://source.unsplash.com/Pn6iimgM-wo/1600x900/"
        className="d-block w-100"
        alt="Carousel Item 1"
      />
    </div>,
    <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`} key={1}>
      <img
        src="https://source.unsplash.com/Pn6iimgM-wo/1600x900/"
        className="d-block w-100"
        alt="Carousel Item 1"
      />
    </div>,
    <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`} key={2}>
      <img
        src="https://source.unsplash.com/tXqVe7oO-go/1600x900/"
        className="d-block w-100"
        alt="Carousel Item 1"
      />
    </div>,
    // Add more carousel items as needed
  ];

  // Add your carousel thumbnail items here
  const thumbnailItems = [
    <button
      className={`thumb col-4 col-sm-2 px-1 py-2 ${activeIndex === 0 ? 'selected' : ''}`}
      key={0}
      onClick={handleThumbsClick(0)}
    >
      <img
        src="https://source.unsplash.com/Pn6iimgM-wo/600x400/"
        className="img-fluid"
        alt="Thumbnail 1"
      />
    </button>,
    <button
      className={`thumb col-4 col-sm-2 px-1 py-2 ${activeIndex === 1 ? 'selected' : ''}`}
      key={1}
      onClick={handleThumbsClick(1)}
    >
      <img
        src="https://source.unsplash.com/Pn6iimgM-wo/600x400/"
        className="img-fluid"
        alt="Thumbnail 1"
      />
    </button>,
    <button
      className={`thumb col-4 col-sm-2 px-1 py-2 ${activeIndex === 2 ? 'selected' : ''}`}
      key={2}
      onClick={handleThumbsClick(2)}
    >
      <img
        src="https://source.unsplash.com/tXqVe7oO-go/1600x900/"
        className="img-fluid"
        alt="Thumbnail 1"
      />
    </button>,
    // Add more thumbnail items as needed
  ];

  return (
    <div className="container mt-5" style={{width : "800px"}}>
      <div className="carousel-container position-relative row">
        {/* Sorry! Lightbox doesn't work - yet. */}
        <div
          id="myCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          ref={myCarousel}
        >
          <div className="carousel-inner">{carouselItems}</div>
        </div>

        {/* Carousel Navigation */}
        <div
          id="carousel-thumbs"
          className="carousel slide"
          data-bs-ride="carousel"
          ref={carouselThumbs}
        >
          <div className="carousel-inner">{thumbnailItems}</div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carousel-thumbs"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carousel-thumbs"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" ariahidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;