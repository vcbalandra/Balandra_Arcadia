import React, { useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Wrapper from '../assets/wrappers/Initiatives';
import customFetch from '../utils/customFetch';

export const loader = async () => {
  try {
    const response = await fetch('/initiatives');
    return response.data;
  } catch (error) {
   console.error(error);
    return redirect('/');
  }
};

const Initiatives = () => {

  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchPartners = async () => {
        try {
          const response = await customFetch.get('/partner/all-partners');
          const AllPartners = response.data.partners;
  
          setPartners(AllPartners);
        } catch (error) {
          console.error('Error fetching events:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPartners();
    }, []);

  return (
    <div>
     <Wrapper>
     <Navbar />
     <section id='initiatives' className='initiatives'>
     <div className="container">
        <h1 className='initiatives-header'>Innovations and Solutions Exchange</h1>
        <p className='initiatives-text'>
          List of Arcadia's Partnered and Accredited Solutions. <br />
          Contact us if you'd like the opportunity to be included
        </p>
        {partners.map((partner, index) => (
          <div key={index} className='partner-entry'>
            <img src={`http://localhost:5100/${partner.partnerImage}`} alt="Partner Image" className='partner-logo' />
            <p className='partner-description'>{partner.partnerDescription}</p>
          </div>
        ))}
      <button className='listed-btn'>Get Listed With Arcadia</button>
      </div>
    </section>
    <Footer />
     </Wrapper>
    </div>
  )
}

export default Initiatives;