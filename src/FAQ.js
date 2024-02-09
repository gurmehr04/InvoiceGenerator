// FAQ.js
import React from 'react';

const FAQ = () => {
  // Generate some sample FAQ data
  const faqData = [
    { question: 'What is your product about?', answer: 'Our product allows you to create and manage invoices with ease, and send invoices directly to clients via WhatsApp .' },
    { question: 'How can I get started?', answer: 'To get started, simply reach out to us to get access to the demo version. Upon liking we can further discuss the best version of InvoiceSwift for you' },
    // Add more questions and answers as needed
  ];

  return (
    <div>
      
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <h5>{item.question}</h5>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
