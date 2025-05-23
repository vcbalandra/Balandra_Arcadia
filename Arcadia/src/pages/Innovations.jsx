import React from 'react'
import { redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Innovations';
import heroImage from '../assets/images/growing.jpg';
import solutionsImg from '../assets/images/innovations-hub.jpg';
import KnowledgeImg from '../assets/images/knowledge-hub.jpg';
import eventsImg from '../assets/images/events-hub.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
// import customFetch from '../utils/customFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export const loader = async () => {
  try {
    const response = await fetch('/company');
    return response.data;
  } catch (error) {
   alert(error);
    return redirect('/');
  }
};

const Innovations = () => {
  return (
   <Wrapper>
    <Navbar />
    <section id='section-hero' className='section-hero'>
    <div className="container">
    <h1 className='motto'>Driving Progress Towards a Circular Economy</h1>
    <p className='hero-message'>Arcadia is a sustainability hub empowering companies
       Innovators and communities to co-create
       circular solutions.
    </p>
    <a href="#growing">
    <button className="hero-button">Explore Events</button>
    </a>
    </div>
    </section>

    <section id='growing' className='growing'>
    <div className="growing-container">
    <div className="row">
    <h2 className='growing-header'>A Growing Network for Impact</h2>
    <p className='growing-message'><span className='arcadia-word'>Arcadia</span> brings together a diverse ecosystem of changemakers including the academe, 
    local including the academe, local and national government agencies, NGOs, industry associations and chambers of commerce
    By fostering cross-sector collaboration, we ensure that circular economy strategies are informed, inclusives and built for long-term
    sustainability.
    </p>
    </div>
    <div className='image-container'>
      <img src={heroImage} alt="Hero Image" className='heroImg'/>
    </div>
    </div>
    </section>

    <section id='keys' className='keys'>
    <div className="keys-container">
    <h3 className='keys-header'>Three Key Components</h3>
    <p className='keys-message'><span className='arcadia-word'>Arcadia's</span> methodology revolves around fostering a continous cycle of dialogue, knowledge sharing, and innovation,
      to empower shareholders and drives meaningful sustainability outcomes. Our key pillars includes: 
    </p>
    <div className="card-grid">
      <div className="card">
      <img src={eventsImg} alt="Events" className="card-image" />
        <h2 className='card-title'>Events</h2>
        <p className='card-text'>
        Join interactive forums, workshops, and roundtables designed to connect stakeholders and spark actionable 
        dialogue around sustainability.
      </p>
        <div className="card-btn-container">
        <Link to="/events-collaboration" className="card-btn">
      <FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '8px' }} />
      Explore Events
      </Link>
      </div>
      </div>
      <div className="card">
      <img src={KnowledgeImg} alt="Knowledge" className="card-image" />
        <h2 className='card-title'>Knowledge Portal</h2>
        <p className='card-text'>
        Access a curated library of insights, research, case studies, and best practices to 
        support informed decision-making and continuous learning.
      </p>
        <div className="card-btn-container">
        <Link to="/publications" className="card-btn">
        <FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '8px' }} />
          Browse Publications
        </Link>
      </div>
      </div>
      <div className="card">
      <img src={solutionsImg} alt="Innovation" className="card-image" />
        <h2 className='card-title'>Innovation & Solutions Exchange</h2>
        <p className='card-text'>
      Discover pioneering ideas, tools, and technologies that drive real-world impact and collaborate with 
      changemakers shaping a sustainable future.
    </p>
        <div className="card-btn-container">
        <Link to="/initiatives" className="card-btn">
        <FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '8px' }} />
          Discover Solutions
          </Link>
        </div>
      </div>
      </div>
    </div>
    </section>

    <section id='focus' className='focus'>
    <div className="focus-container">
    <h4 className='focus-header'>Our Focus in the Philippines Context</h4>
    <p className='focus-message'>In the Philippines we focus on fire Interconnected pillars that are critical to advancing a circular
      economy and building climate resillience.
    </p>
     <Carousel/>
    </div>
    </section>

    <section id='about' className='about'>
    <div className="about-container">
    <h5 className='about-header'>About Arcadia</h5>
    <p className='about-message'><span className='arcadia-word'>Arcadia</span> is a sustainability hub for companies commited to advancing sustainability practices and accelerating
      the transition to a circular economy.
    </p>
    <p className='about-hub'>As a hub, it facilitates the exchange of loading sustainability practices and resources, fostering the development
      of cost-effective and efficient solutions to sustainability challenges.
    </p>
    </div>
    </section>
    <Footer/>
    </Wrapper>
   
  );
};

export default Innovations;