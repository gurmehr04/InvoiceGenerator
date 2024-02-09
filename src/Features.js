import React from 'react';

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="display-4 text-center mb-5">Key Features</h2> 
        <div className="row">
          <div className="col-md-6">
            <h4>Custom Invoice Creation</h4>
            <p>Create personalized invoices tailored to your brand and business needs.</p>
          </div>
          <div className="col-md-6">
            <h4>Automated Reminders</h4>
            <p>Set up automated reminders to ensure timely payment from your clients.</p>
          </div>
          <div className="col-md-6">
            <h4>Expense Tracking</h4>
            <p>Effortlessly track and manage your business expenses for better financial control.</p>
          </div>
          <div className="col-md-6">
            <h4>Multi-Currency Support</h4>
            <p>Invoice and receive payments in multiple currencies to cater to a global clientele.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Features;
