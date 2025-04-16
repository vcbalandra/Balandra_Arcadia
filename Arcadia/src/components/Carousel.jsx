import React from 'react';
import Wrapper from '../assets/wrappers/Carousel';
import img1 from "../assets/images/plastic-waste.jpg"; 
import img2 from "../assets/images/food-waste.jpg"; 
import img3 from "../assets/images/waste-energy.jpg"; 
import img4 from "../assets/images/disaster-risk.jpg"; 
import img5 from "../assets/images/renewable-energy.jpg"; 

const Carousel = () => {
  return (
    <Wrapper>
        <div className="carousel-container">
            <div className="container">
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={img1} className="d-block w-100 img" alt="First Slide" />
        <div className="carousel-caption">
          <h3 className="carousel-header">Plastic Waste Reduction</h3>
          <p className="carousel-text">Promoting eco-friendly alternatives and recycling to reduce plastic pollution.</p>
        </div>
      </div>

      <div className="carousel-item">
        <img src={img2} className="d-block w-100 img" alt="Second Slide" />
        <div className="carousel-caption">
          <h3 className="carousel-header">Food Waste Recovery</h3>
          <p className="carousel-text">Transforming surplus food into valuable resources to combat hunger and waste.</p>
        </div>
      </div>

      <div className="carousel-item">
        <img src={img3} className="d-block w-100 img" alt="Third Slide" />
        <div className="carousel-caption">
          <h3 className="carousel-header">Waste-to-Energy</h3>
          <p className="carousel-text">Converting waste materials into clean, usable energy to power communities.</p>
        </div>
      </div>

      <div className="carousel-item">
        <img src={img4} className="d-block w-100 img" alt="Fourth Slide" />
        <div className="carousel-caption">
          <h3 className="carousel-header">Disaster Risk Resilience</h3>
          <p className="carousel-text">Building sustainable infrastructure to withstand and recover from disasters.</p>
        </div>
      </div>

      <div className="carousel-item">
        <img src={img5} className="d-block w-100 img" alt="Fifth Slide" />
        <div className="carousel-caption">
          <h3 className="carousel-header">Renewable Energy</h3>
          <p className="carousel-text">Harnessing solar, wind, and other renewable sources for a cleaner future.</p>
        </div>
      </div>
      </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      </div>
    </Wrapper>
  );
};

export default Carousel;