import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css'; // Ensure this path is correct for your Tailwind CSS setup
import App from './App'; // Import your App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
