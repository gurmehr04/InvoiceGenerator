
import React, { useState } from 'react';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import ContactForm from './ContactForm'; 
import FAQ from './FAQ';
import InvoiceGenerator from './InvoiceGenerator';

const Header = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showFAQModal, setShowFAQModal] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  const handleContactClick = () => {
    setShowContactModal(true);
  };

  const handleFAQClick = () => {
    setShowFAQModal(true);
  };

  const handleInvoiceClick = () => {
    setShowInvoiceModal(true);
  };

  const handleCloseContactModal = () => {
    setShowContactModal(false);
  };

  const handleCloseFAQModal = () => {
    setShowFAQModal(false);
  };

  const handleCloseInvoiceModal = () => {
    setShowInvoiceModal(false);
  };

  return (
    <header>
      <Navbar expand="lg" bg="light" variant="light">
        <div className="container">
          <Navbar.Brand href="#">InvoiceSwift</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link onClick={handleFAQClick}>FAQ</Nav.Link>
              <Nav.Link onClick={handleContactClick}>Contact</Nav.Link>
              <Nav.Link onClick={handleInvoiceClick}>Invoice Generator</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
        
      </Navbar>

      <ContactForm show={showContactModal} handleClose={handleCloseContactModal} />

      {/* FAQ modal */}
      <Modal show={showFAQModal} onHide={handleCloseFAQModal}>
        <Modal.Header closeButton>
          <Modal.Title>Frequently Asked Questions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FAQ />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseFAQModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* InvoiceGenerator modal */}
      <Modal show={showInvoiceModal} onHide={handleCloseInvoiceModal}>
        <Modal.Header closeButton>
          <Modal.Title>Invoice Generator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InvoiceGenerator />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInvoiceModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
