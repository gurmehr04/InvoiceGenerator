import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'; // Import the styles

// Use createRoot to render your application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
