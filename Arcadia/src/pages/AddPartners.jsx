import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Card, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import StyledCardImg from '../assets/wrappers/AddPartner';
import customFetch from "../utils/customFetch";
import Cookies from 'js-cookie';

const AddPartners = () => {
   const [showModal, setShowModal] = useState(false);
    const [partners, setPartners] = useState([]); 
    const [partnerName, setPartnerName] = useState("");
    const [partnerWebsite, setPartnerWebsite] = useState("");
    const [partnerDescription, setPartnerDescription] = useState("");
    const [partnerImage, setPartnerImage] = useState(null);
    const [partnerToUpdate, setPartnerToUpdate] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false); 
    const [partnerToDelete, setPartnerToDelete] = useState(null); 
    const [isEditing, setIsEditing] = useState(false); 

     useEffect(() => {
        fetchPartners();
      }, []);

      const fetchPartners = async () => {
          try {
            const token = Cookies.get('token');
            const response = await customFetch.get("/partner/all-partners", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
      
            if (response.data.success) {
              setPartners(response.data.partners); 
            } else {
              toast.error(response.data.message || "Failed to fetch partners!");
            }
          } catch (error) {
            console.error("Error fetching partners:", error);
            toast.error("Failed to fetch partners!");
          }
        };

        const handleFileChange = (e) => {
          const file = e.target.files[0];
          if (file) {
            setPartnerImage(file);
          }
        };

        const handleCreatePartner = async (e) => {
          e.preventDefault();
      
          const formData = new FormData();
          formData.append("partnerName", partnerName);
          formData.append("partnerWebsite", partnerWebsite);
          formData.append("partnerDescription", partnerDescription);
          if (partnerImage) {
            formData.append("partnerImage", partnerImage);
          }
      
          try {
            const token = Cookies.get('token');
            const response = await customFetch.post("/partner/add-partners", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              },
            });
      
            if (response.data.success) {
              toast.success("Partner created successfully!");
              resetForm();
              fetchPartners();
            } else {
              toast.error(response.data.message || "Failed to create partner!");
            }
          } catch (error) {
            console.error("Error creating partner:", error);
            toast.error("Failed to create partner!");
          }
        };

        const handleUpdatePartner = async (e) => {
          e.preventDefault();
      
          const formData = new FormData();
          formData.append("partnerName", partnerName);
          formData.append("partnerWebsite", partnerWebsite);
          formData.append("partnerDescription", partnerDescription);
          if (partnerImage) {
            formData.append("partnerImage", partnerImage);
          }
      
          try {
            const token = Cookies.get('token');
            const response = await customFetch.put(`/partner/update-partner/${partnerToUpdate._id}`, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              },
            });
      
            if (response.data.success) {
              toast.success("partner updated successfully!");
              resetForm();
              fetchPartners();
            } else {
              toast.error(response.data.message || "Failed to update partner!");
            }
          } catch (error) {
            console.error("Error updating partner:", error);
            toast.error("Failed to update partner!");
          }
        };
      
        const resetForm = () => {
          setPartnerName("");
          setPartnerWebsite("");
          setPartnerDescription("");
          setPartnerImage(null);
          setShowModal(false);
          setIsEditing(false);
        };

         const handleDeletePartner = async () => {
            try {
              const token = Cookies.get('token');
              const response = await customFetch.delete(`/partner/delete-partner/${partnerToDelete._id}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
        
              if (response.data.success) {
                toast.success("Partner deleted successfully!");
                setShowDeleteModal(false);
                fetchPartners();
              } else {
                toast.error(response.data.message || "Failed to delete partner!");
              }
            } catch (error) {
              console.error("Error deleting partner:", error);
              toast.error("Failed to delete partner!");
            }
          };
        
          const handleEditPartner = (partner) => {
            setPartnerName(partner.partnerName);
            setPartnerWebsite(partner.partnerWebsite);
            setPartnerDescription(partner.partnerDescription);
            setPartnerImage(null);
            setIsEditing(true);
            setPartnerToUpdate(partner);
            setShowModal(true);
          };
        
          const handleShowDeleteModal = (partner) => {
            setPartnerToDelete(partner);
            setShowDeleteModal(true);
          };

          return (
            <div className="container">
              <Button variant="success" onClick={() => { setIsEditing(false); setShowModal(true); }}>
                Add Partner
              </Button>
              <div className="total-partners" style={{ marginTop: '2rem' }}>
                <h4>Total Partners: {partners.length}</h4>
              </div>
              <Modal show={showModal} onHide={resetForm}>
                <Modal.Header closeButton>
                  <Modal.Title>{isEditing ? "Edit Partner" : "Create New Partner"}</Modal.Title>
                </Modal.Header>
        
                <Modal.Body>
                  <Form onSubmit={isEditing ? handleUpdatePartner : handleCreatePartner} encType="multipart/form-data">
                    <Form.Group className="mb-3">
                      <Form.Label>Partner Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Partner Name"
                        value={partnerName}
                        onChange={(e) => setPartnerName(e.target.value)}
                        required
                      />
                    </Form.Group>
        
                    <Form.Group className="mb-3">
                      <Form.Label>Partner Website (optional)</Form.Label>
                      <Form.Control
                        type="url"
                        placeholder="Enter Partner Website"
                        value={partnerWebsite}
                        onChange={(e) => setPartnerWebsite(e.target.value)}
                      />
                    </Form.Group>
        
                    <Form.Group className="mb-3">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter partner description"
                        value={partnerDescription}
                        onChange={(e) => setPartnerDescription(e.target.value)}
                        required
                      />
                    </Form.Group>
        
                    <Form.Group className="mb-3">
                      <Form.Label>Partner Image</Form.Label>
                      <Form.Control
                        type="file"
                        onChange={handleFileChange}
                        accept="image/*"
                        required={!isEditing}
                      />
                      <div className="mt-2">
                        <strong>Selected Image:</strong>
                        <div className="mt-2">
                          {partnerImage && <p>{partnerImage.name}</p>}
                        </div>
                      </div>
                    </Form.Group>
        
                    <Button variant="success" type="submit" className="w-100">
                      {isEditing ? "Update Partner" : "Create Partner"}
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>
        
              <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
        
                <Modal.Body>
                  <p>Are you sure you want to delete this partner?</p>
                </Modal.Body>
        
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                    Cancel
                  </Button>
                  <Button variant="danger" onClick={handleDeletePartner}>
                    Delete
                  </Button>
                </Modal.Footer>
              </Modal>
        
              <Row className="mt-4">
                {partners.map((partner) => (
                  <Col key={partner._id} sm={12} md={6} lg={4}>
                    <Card className="mb-4" style={{ height: '400px' }}>
                      <StyledCardImg variant="top" src={`http://localhost:5100/${partner.partnerImage}`} alt="Partner Image"/>
                      <Card.Body>
                        <Card.Title>{partner.partnerName}</Card.Title>
                        <Button variant="primary" onClick={() => handleEditPartner(partner)}>
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleShowDeleteModal(partner)}
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

export default AddPartners;