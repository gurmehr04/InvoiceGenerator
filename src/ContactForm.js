import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Modal, Button, Form } from 'react-bootstrap';

const ContactForm = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Implement your logic for handling the form submission
    // For now, let's just log the email to the console
    console.log('Email submitted:', email);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// Define PropTypes for the component
ContactForm.propTypes = {
  show: PropTypes.bool.isRequired, // 'show' prop is a required boolean
  handleClose: PropTypes.func.isRequired, // 'handleClose' prop is a required function
};

export default ContactForm;
