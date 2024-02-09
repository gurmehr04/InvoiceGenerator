import React from 'react';

const Advantages = () => {
  return (
    <section id="advantages" className="bg-light text-center p-5">
      <div className="container">
        <h2 className="display-4">Advantages of Our Product</h2>
        <div className="row">
          <div className="col-md-4">
            <i className="fas fa-check-circle fa-3x mb-2 text-primary"></i>
            <h4>Efficient Invoicing</h4>
            <p>Create and manage invoices with ease, saving you time and effort.</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-mobile-alt fa-3x mb-2 text-primary"></i>
            <h4>WhatsApp Integration</h4>
            <p>Send invoices directly to clients via WhatsApp for quick and convenient transactions.</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-lock fa-3x mb-2 text-primary"></i>
            <h4>Secure Transactions</h4>
            <p>Ensure the security of your financial data with our encrypted and secure invoicing platform.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
