import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Wrapper from '../assets/wrappers/Initiatives';

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
  return (
    <div>
     <Wrapper>
     <Navbar />
     <section id='initiatives' className='initiatives'>
     <div className="container">
     <h1 className='initiatives-header'>Innovations and Solutions Exchange</h1>
     <p className='initiatives-text'>List of Arcadia's Partnered and Accredited Solutions. <br />
     Contact us if you'd like the opportunity to be included
     </p>
        <img src="/" alt="" className='partner-logo' />
        <p className='partner-description'>A sustainability consulting firm that helps client with total transformation
            -- driving complex change, enabling sustainable growth, and driving bottomline impact.
        </p>
     </div>
     <button className='listed-btn'>Get Listed With Arcadia</button>
     </section>
     </Wrapper>
     <Footer />
    </div>
  )
}

export default Initiatives;