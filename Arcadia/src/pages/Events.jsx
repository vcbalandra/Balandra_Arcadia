import React, { useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Events';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import customFetch from '../utils/customFetch';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import heroImage from '../assets/images/hero-img.jpg';
import { Modal, Button } from 'react-bootstrap'; 
import dialogues from '../assets/images/dialogues.jpg';
import hackathon from '../assets/images/hackathon.jpg';

export const loader = async () => {
  try {
    const response = await fetch('/events-collaboration');
    return response.data;
  } catch (error) {
    alert(error);
    return redirect('/');
  }
};

const Events = () => {
  const [emblaUpcomingRef] = useEmblaCarousel(
    {
      loop: false,
      slidesToScroll: 1,
      align: 'start',
      draggable: true,
      speed: 6,
    },
    [Autoplay()]
  );

  const [emblaPreviousRef] = useEmblaCarousel(
    {
      loop: false,
      slidesToScroll: 1,
      align: 'start',
      draggable: true,
      speed: 6,
    },
    [Autoplay()]
  );

  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [previousEvents, setPreviousEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await customFetch.get('/event/all-events');
        const allEvents = response.data.events;

        const currentDate = new Date();

        const upcoming = allEvents.filter((event) => new Date(event.eventDate) >= currentDate);
        const previous = allEvents.filter((event) => new Date(event.eventDate) < currentDate);

        setUpcomingEvents(upcoming);
        setPreviousEvents(previous);
        setEvents(allEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleViewEvent = (event) => {
    setSelectedEvent(event);
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <div>
      <Wrapper>
        <Navbar />
        <section id="section-hero" className="section-hero">
          <div className="container">
            <h1 className="section-statement">
              Foster discourse and drive <br /> actionable sustainability solutions
            </h1>
          </div>
        </section>

        <section id="dialogues" className="dialogues">
          <div className="dialogues-container">
            <div className="row">
              <h2 className="dialogues-title">DEEP DIVE DIALOUGES</h2>
              <p className="dialogues-message">
                Our Deep Dive Dialogue sessions are structured discussions designed to encourage stakeholders to share their insights and experience on the challenges and opportunities in sustainability. The sessions will focus on sharing on-the-ground challenges, case studies, good and bad practices, as well as solutions, technologies, and best practices adopted by other countries.
              </p>
              <p className="dialogues-sessions">Forums, Panel Discussions, Fireside Chats, Summits</p>
            </div>
            <div className="image-container">
              <img src={dialogues} alt="Hero Image" className="dialogueImg" />
            </div>
          </div>
        </section>

        <section id="campaigns" className="campaigns">
          <div className="campaigns-container">
            <div className="image-container">
              <img src={hackathon} alt="Hero Image" className="campaignImg" />
            </div>
            <div className="row">
              <h3 className="campaigns-title">HACKATHONS AND CAMPAIGNS</h3>
              <p className="campaigns-message">
                <span className="arcadia-word">Arcadia</span> organizes hackathons and campaign-driven events designed to bring together innovative minds and passionate advocates to solve real-world sustainability challenges.
              </p>
              <p className="campaign-activities">Hackathons, Workshops, and Trainings</p>
            </div>
          </div>
        </section>

        <section id="upcoming" className="upcoming">
          <div className="upcoming-container">
            <h4 className="upcoming-title">Upcoming Events</h4>
            <div className="embla" ref={emblaUpcomingRef}>
              <div className="embla__container">
                {loading ? (
                  <p>Loading upcoming events...</p>
                ) : (
                  upcomingEvents.map((event) => (
                    <div key={event._id} className="embla__slide">
                      <h4 className='event-title'>{event.eventTitle}</h4>
                      {event.eventImage && <img src={`http://localhost:5100/${event.eventImage}`} alt="Event" className="upcoming-img" />}
                      <button className='view-btn' onClick={() => handleViewEvent(event)}>View Event</button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="previous" className="previous">
          <div className="previous-container">
            <h5 className="previous-title">Previous Events</h5>
            <div className="embla" ref={emblaPreviousRef}>
              <div className="embla__container">
                {loading ? (
                  <p>Loading previous events...</p>
                ) : (
                  previousEvents.map((event) => (
                    <div key={event._id} className="embla__slide">
                      <h5 className='event-title'>{event.eventTitle}</h5>
                      {event.eventImage && <img src={`http://localhost:5100/${event.eventImage}`} alt="Event" className="previous-img" />}
                      <button className='view-btn' onClick={() => handleViewEvent(event)}>View Event</button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedEvent?.eventTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedEvent?.eventDescription}</p>
            {selectedEvent && (
            new Date(selectedEvent.eventDate) >= new Date() ? (
              <Button variant="success" href={selectedEvent.registrationLink} target="_blank">
                Register
              </Button>
            ) : (
              <Button variant="secondary" disabled>
                Event Closed
              </Button>
            )
          )}
          </Modal.Body>
        </Modal>

        <Footer />
      </Wrapper>
    </div>
  );
};

export default Events;