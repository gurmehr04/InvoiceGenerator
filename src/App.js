// App.js
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Advantages from './Advantages';
import Carousel from './Carousel';
import Features from './Features';
/*import InvoiceGenerator from './InvoiceGenerator';*/
import Footer from './Footer';


const App = () => {
  return (
    <div className="App">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="py-5">
        <div className="container">
          <Hero />
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Key Advantages</h2>
          <Advantages />
        </div>
      </section>

      {/* Carousel Section */}
      <section id="carousel" className="py-5">
        <div className="container">
          <Carousel />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5"> </h2>
          <Features />
        </div>
      </section>

      {/* Product Images Section */}
      <section id="images" className="py-5">
        <div className="container text-center">
          <h2 className="mb-5">Product Images</h2>
         
          <img src="/images/1.png" alt="Product 2" width="350"/>
          
        </div>
      </section>
    {/* 
    {/* Invoice Generator Section */ 
    /*  <section id="invoice" className="py-5">
        <div className="container">
          <InvoiceGenerator />
        </div>
      </section>
      */}
      {/* Footer Section */}
      <section id="footer" className="py-5">
        <div className="container">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default App;
