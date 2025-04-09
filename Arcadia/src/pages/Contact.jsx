import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import Wrapper from '../assets/wrappers/Contact';
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const response = await fetch('/contact');
    return response.data;
  } catch (error) {
    alert(error);
    return redirect('/');
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    topic: '',
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    zipCode: '',
    location: '',
    message: '',
    hasRead: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); 

    emailjs
      .send('service_ksbt0pp', 'template_t8uplbf', formData, 'HI3ZfWBuJ0mCpbX_p')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success('Your message has been sent successfully!');
          
          setFormData({
            topic: '',
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            phone: '',
            zipCode: '',
            location: '',
            message: '',
            hasRead: false,
          });

          setIsSubmitting(false); 
        },
        (error) => {
          console.log('FAILED...', error);
          toast.error('Failed to send message. Please try again later.');
          setIsSubmitting(false); 
        }
      );
  };

  return (
    <div>
      <Wrapper>
        <Navbar />
        <section id="contact">
          <div className="contact-container">
          <h1 className='contact-header'>Contact us</h1>
          </div>
        </section>

        <div className='informations'>
          <p className='additional'>Additional questions? Submit our form</p>
          <p className='additional-text'>How can we help?</p>
          <p className='additional-text'>Please submit your question here and we will respond as quickly as possible.</p>
          <p className='additional-text'>If your query relates to <i>Privacy,</i> please refer to the information and contract details listed in our
          Privacy Notice.</p>
          <p className='additional-text'>Fields marked with an asterisk (*) are required.</p>
        </div>

        <section id="contact-form">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="topic">Topic*</label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                >
                  <option value="">Please select a topic</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Support">Support</option>
                  <option value="Sales">Sales</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="firstName">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="First Name"
                />
              </div>

              <div>
                <label htmlFor="lastName">Last Name*</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Last Name"
                />
              </div>

              <div>
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                />
              </div>

              <div>
                <label htmlFor="company">Company*</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Company"
                />
              </div>

              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
              </div>

              <div>
                <label htmlFor="zipCode">Zip/Postal Code*</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  placeholder="Zip/Postal Code"
                />
              </div>

              <div>
                <label htmlFor="location">Location*</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="Location"
                />
              </div>

              <div>
                <label htmlFor="message">Your message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Message"
                />
              </div>
              <div>
              <label htmlFor="hasRead">
                <input
                  type="checkbox"
                  id="hasRead"
                  name="hasRead"
                  checked={formData.hasRead}
                  onChange={handleChange}
                  required
                />
                <span style={{ marginLeft: '10px' }}>I have read and agree to the terms</span>
              </label>
            </div>
              <button type="submit" className="form-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </section>
        <section id="connect">
          <div id="connect-container">
          <h2 className='connect-header'>Let's connect</h2>
            <ul>
              <li>Get in touch</li>
              <li>Explore careers</li>
              <li>View locations</li>
              <li>Learn about Arcadia</li>
            </ul>
            <ul>
              <li>Who we are</li>
              <li>What we do</li>
              <li>Our thinking</li>
              <li>Submit RFP</li>
            </ul>
            <ul>
              <li>Newsroom</li>
              <li>Events</li>
              <li>Press releases</li>
              <li>Alumni</li>
            </ul>
          </div>
        </section>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Contact;