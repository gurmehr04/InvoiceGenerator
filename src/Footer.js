import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-3">
      <Container className="text-center">
        <p className="mb-0">
          <strong>Contact Information:</strong>{' '}
          <span className="mx-2">Email: xyz@gmail.com</span>
          <span className="mx-2">Phone: +91 7742009122</span>
          <span className="mx-2">Location: Dehradun, Uttarakhand, India</span>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
