import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18
import './styles.css'; // Import your styles
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// React 18 version of rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Call reportWebVitals for performance measurements
reportWebVitals();
