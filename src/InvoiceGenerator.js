import React, { useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import html2pdf from 'html2pdf.js';

const InvoiceGenerator = () => {
  const componentRef = useRef();
  const [numberOfItems, setNumberOfItems] = useState(5);
  const [items, setItems] = useState(Array.from({ length: numberOfItems }, () => ({ name: '', description: '', price: '' })));

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + (parseFloat(item.price) || 0), 0).toFixed(2);
  };

  const generatePDF = () => {
    const pdf = new jsPDF();
    html2pdf(componentRef.current, { jsPDF: pdf });
    pdf.save('invoice.pdf');
  };

  const handleNumberOfItemsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumberOfItems(isNaN(value) ? 0 : value);
    setItems(Array.from({ length: value }, () => ({ name: '', description: '', price: '' })));
  };

  return (
    <div style={{ maxWidth: '700px', maxHeight: '700px', overflow: 'auto' }}>
    
    
    <div>
      <h2 className="text-center mb-4">INVOICE-SWIFT</h2>

      <label htmlFor="numberOfItems">Number of Items:</label>
      <input
        type="number"
        id="numberOfItems"
        value={numberOfItems}
        onChange={handleNumberOfItemsChange}
        min="1"
      />

      <div ref={componentRef}>
       
        <div>
          <h4>Invoice</h4>
          <p>Invoice Number: INV-001</p>
          <p>Date: {new Date().toLocaleDateString()}</p>
          
        </div>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <p>Total: ${calculateTotal()}</p>
        </div>
      </div>

      <button onClick={generatePDF}>Download PDF</button>
    </div>
    </div>
    
    
  );
};

export default InvoiceGenerator;
