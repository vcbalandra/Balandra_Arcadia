import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import customFetch from "../utils/customFetch";
import Cookies from 'js-cookie';

const AddEvent = () => {
  const [showModal, setShowModal] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [registrationLink, setRegistrationLink] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventImage, setEventImage] = useState(null);

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
  
      console.log('Response:', response); 
  
      if (response.data.success) {
        toast.success("Event created successfully!");
        setEventTitle("");
        setRegistrationLink("");
        setEventDescription("");
        setEventDate("");
        setEventImage(null);
        setShowModal(false); 
      } else {
        toast.error(response.data.message || "Failed to create event!");
      }
    } catch (error) {
      console.error("Error creating event:", error);
      toast.error("Failed to create event!");
    }
  };

  return (
    <div className="container">
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Add Event
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Event</Modal.Title>
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
                required
              />
              <div className="mt-2">
                <strong>Selected Image:</strong>
                <div className="mt-2">
                  {eventImage && <p>{eventImage.name}</p>} 
                </div>
              </div>
            </Form.Group>
            <Button variant="success" type="submit" className="w-100">
              Create Event
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddEvent;