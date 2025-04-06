import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Card, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import StyledCardImg  from '../assets/wrappers/AddEvent';
import customFetch from "../utils/customFetch";
import Cookies from 'js-cookie';

const AddEvent = () => {
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]); 
  const [eventTitle, setEventTitle] = useState("");
  const [registrationLink, setRegistrationLink] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventImage, setEventImage] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false); 
  const [eventToDelete, setEventToDelete] = useState(null); 
  const [isEditing, setIsEditing] = useState(false); 

  
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const token = Cookies.get('token');
      const response = await customFetch.get("/event/all-events", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setEvents(response.data.events); 
      } else {
        toast.error(response.data.message || "Failed to fetch events!");
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Failed to fetch events!");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEventImage(file);
    }
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("eventTitle", eventTitle);
    formData.append("registrationLink", registrationLink);
    formData.append("eventDescription", eventDescription);
    formData.append("eventDate", eventDate);
    if (eventImage) {
      formData.append("eventImage", eventImage);
    }

    try {
      const token = Cookies.get('token');
      const response = await customFetch.post("/event/add-event", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        toast.success(isEditing ? "Event updated successfully!" : "Event created successfully!");
        resetForm();
        fetchEvents(); 
      } else {
        toast.error(response.data.message || "Failed to create/update event!");
      }
    } catch (error) {
      console.error("Error creating/updating event:", error);
      toast.error("Failed to create/update event!");
    }
  };

  const resetForm = () => {
    setEventTitle("");
    setRegistrationLink("");
    setEventDescription("");
    setEventDate("");
    setEventImage(null);
    setShowModal(false); 
    setIsEditing(false); 
  };

  const handleDeleteEvent = async () => {
    try {
      const token = Cookies.get('token');
      const response = await customFetch.delete(`/event/delete-event/${eventToDelete._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        toast.success("Event deleted successfully!");
        setShowDeleteModal(false); 
        fetchEvents(); 
      } else {
        toast.error(response.data.message || "Failed to delete event!");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Failed to delete event!");
    }
  };

  const handleEditEvent = (event) => {
    setEventTitle(event.eventTitle);
    setRegistrationLink(event.registrationLink);
    setEventDescription(event.eventDescription);
    setEventDate(event.eventDate);
    setIsEditing(true); 
    setShowModal(true);
  };

  const handleShowDeleteModal = (event) => {
    setEventToDelete(event);
    setShowDeleteModal(true);
  };

  return (
    <div className="container">
      <Button variant="primary" onClick={() => { setIsEditing(false); setShowModal(true); }}>
        Add Event
      </Button>

      <Modal show={showModal} onHide={resetForm}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? "Edit Event" : "Create New Event"}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleCreateEvent} encType="multipart/form-data">
            <Form.Group className="mb-3">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event title"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Registration Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter registration link"
                value={registrationLink}
                onChange={(e) => setRegistrationLink(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter event description"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Event Image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                required={!isEditing} 
              />
              <div className="mt-2">
                <strong>Selected Image:</strong>
                <div className="mt-2">
                  {eventImage && <p>{eventImage.name}</p>}
                </div>
              </div>
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              {isEditing ? "Update Event" : "Create Event"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to delete this event?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteEvent}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mt-4">
        {events.map((event) => (
          <Col key={event._id} sm={12} md={6} lg={4}>
            <Card className="mb-4"  style={{ height: '400px' }}>
            <StyledCardImg  variant="top" src={`http://localhost:5100/${event.eventImage}`} alt="Event Image"/>
              <Card.Body>
                <Card.Title>{event.eventTitle}</Card.Title>
                <Button variant="primary" onClick={() => handleEditEvent(event)}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleShowDeleteModal(event)}
                  className="ms-2"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AddEvent;