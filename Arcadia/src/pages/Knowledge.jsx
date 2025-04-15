import React, { useState, useEffect }  from 'react';
import { redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Knowledge';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import customFetch from '../utils/customFetch';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import heroImage from '../assets/images/hero-img.jpg';
import stakeholders from '../assets/images/stakeholders.jpg';
import people from '../assets/images/people.jpg';
import clients from '../assets/images/clients.jpg';
import society from '../assets/images/society.jpg';
import boards from '../assets/images/boards.jpg';
import agenda from '../assets/images/agenda.jpg';
import biodiversity from '../assets/images/biodiversity.jpg';
import regulations from '../assets/images/regulations.jpg';
import analysis from '../assets/images/analysis.jpg';
import papers from '../assets/images/papers.jpg';
import reports from '../assets/images/reports.jpg';

export const loader = async () => {
  try {
    const response = await fetch('http://localhost:5173/publications');
    return response.data;
  } catch (error) {
   console.error(error);
    return redirect('/');
  }
};

const Knowledge = () => {
  const [editorials, setEditorials] = useState([
    { id: 1, header: 'For our stakeholders', image: stakeholders, text: 'We run a sustainable and responsible business that manages risks and behaves ethically, support their skills development and career advancement.' },
    { id: 2, header: 'For our people', image: people, text: 'We provide an inclusive and equitable workplace, promote their safety and well-being, and support their skills development and career advancement.' },
    { id: 3, header: 'For our clients', image: clients, text: 'We strive to serve our clients with the highest level of quality, integrity, and innovation to help them meet some of their biggest challenges.' },
    { id: 4, header: 'For society', image: society, text: 'We act in the public interest, to help fight corruption, protect the environment, and provide opportunities and resources for those seeking a better future.' },
  ]);

  const [waste, setWaste] = useState([
    { id: 1, header: 'Climate change governance and the board chair of the future', image: boards, text: 'Some chairs are encountering headwinds, while others are driving the climate agenda vigorously. How can chairs and boards help build momentum to meet the sustainability challenge head-on?' },
    { id: 2, header: 'Climate on the agenda', image: agenda, text: 'Global leaders have met at different gatherings leading up to and throughout 2023, including the United Nations Climate Change Conference (COP28), the United Nations Biodiversity Conference (COP15).' },
    { id: 3, header: 'Putting nature and biodiversity loss on the business agenda', image: biodiversity, text: 'How protecting nature and introducing nature-positive strategies can lead to innovation, job creation, and improved resilience to future shocks. he United Nations Biodiversity.' },
    { id: 4, header: 'Sustainability regulations: A gateway to new digital opportunities', image: regulations, text: 'Emergence of region and country-specific regulations and compliance could pose organization-wide challenges for businesses due to their varied scope and timelines.' },
  ]);


  const [emblaRefEditorials] = useEmblaCarousel(
    {
      loop: false,
      slidesToScroll: 1,
      align: 'start',
      draggable: true,
      speed: 6,
    },
    [Autoplay()] 
  );

  const [emblaRefWaste] = useEmblaCarousel(
    {
      loop: false,
      slidesToScroll: 1,
      align: 'start',
      draggable: true,
      speed: 6,
    },
    [Autoplay()]
  );

  useEffect(() => {
  }, []);

  return (
    <div>
      <Wrapper>
       <Navbar />
      <section id='section-hero' className='section-hero'>
      <div className="container">
      <h1 className='section-statement'>Your knowledge hub for<br/> waste manangement</h1>
      </div>
      </section>

      <section id='market-analysis' className='market-analysis'>
      <div className="market-container">
            <div className="row">
          <h2 className='market-title'>MARKET ANALYSIS</h2>
          <p className='market-message'><span className='arcadia-word'>Arcadia</span> conducts in-depth market analysis to provide businesses with a comprehensive understanding
            of the sustainability landscape. These analysis explore trends opportunities, challenges and key drivers in the transition
            to a circular economy. By delivering actionable insights, we enable companies to identify growth areas, anticipate market shifts,
            and shifts, and align their strategies with the evolving demands of sustainable practices and consumer preferences.
          </p>
          </div>
          <div className='image-container'>
            <img src={analysis} alt="Hero Image" className='marketImg'/>
           </div>
          </div>
      </section>

      <section id='position-papers' className='position-papers'>
        <div className="papers-container">
           <div className='image-container'>
            <img src={papers} alt="Hero Image" className='papersImg'/>
            </div>
          <div className="row">
          <h3 className='papers-title'>POSITION PAPERS</h3>
          <p className='papers-message'><span className='arcadia-word'>Arcadia</span> develops position papers that outline informed perspectives on critical sustainability issues.
            These papers offer a deep dive into industry challenges, policy recommendations, and strategic actions that stakeholders should
            adopt to dive systematic change. Backed by data, case studies, and expert insights, our position papers serve as authoratative
            resources for guiding decision-makers in business, government, and civil society toward impactful, sustainability-focused
            policies and practices.
          </p>
          </div>
        </div>
      </section>

      <section id='reports-manifestos' className='reports-manifestos'>
      <div className="reports-container">
            <div className="row">
          <h4 className='reports-title'>REPORTS AND MANIFESTOS</h4>
          <p className='reports-message'>Our waste reports provide detailed assessments of current waste management practices, with a focus on
            gaps, inefficiencies, and opportunities for improvement. These reports highlight both local and global case studies, offering
            solutions and technologies that can optimize waste management processes. By addressing critical issues in post-consumer waste, our
            waste reports empower companies, municipalities, and policymakers to implement effective, sustainable, and circular waste
            management, our waste reports empower companies, municipalities, and policymakers to implement effective, sustainable, and circular
            waste management strategies.
          </p>
          </div>
          <div className='image-container'>
            <img src={reports} alt="Hero Image" className='reportsImg'/>
           </div>
          </div>
      </section>

      <section id='editorials' className='editorials'>
        <div className="editorials-container">
        <h5 className='editorials-title'>Opinion Editorials</h5>
         <div className="embla" ref={emblaRefEditorials}>
            <div className="embla__container">
              {editorials.map((editorials) => (
                <div key={editorials.id} className="embla__slide">
                  {editorials.image && <img src={editorials.image} alt="Hero" className='editorials-img'/>} 
                  <h2 className='editorials-header'>{editorials.header}</h2> 
                  <p className='editorials-text'>{editorials.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id='waste-reports' className='waste-reports'>
        <div className="waste-container">
          <h6 className='waste-title'>Published Waste Reports</h6>
          <div className="embla" ref={emblaRefWaste}>
            <div className="embla__container">
              {waste.map((waste) => (
                <div key={waste.id} className="embla__slide">
                  {waste.image && <img src={waste.image} alt="Hero" className='waste-img'/>}
                  <h2 className='waste-header'>{waste.header}</h2> 
                  <p className='waste-text'>{waste.text}</p> 
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </Wrapper>
      </div>
  )
}

export default Knowledge