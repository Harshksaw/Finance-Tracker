// Import the necessary dependencies from the 'react' and 'react-dom' libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import the CSS file for styling
import './index.css';

// Import the main App component from '@/App'
import App from '@/App';

// Render the App component within the 'root' element in the HTML document
ReactDOM.render(
  // Wrap the App component with <React.StrictMode> for additional checks in development mode
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Find the HTML element with the id 'root' and render the App component inside it
  document.getElementById('root')
);
