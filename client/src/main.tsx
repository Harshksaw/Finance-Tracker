// Import the necessary dependencies from the 'react' and 'react-dom' libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the CSS file for styling
import '@/index.css';

// Import the main App component from '@/App'
import App from '@/App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {api} from "@/state/api";

export const store = configureStore({
  reducer: {[ api.reducerPath]: api.reducer},
  middleware: (getDefault)=> getDefault().concat(api.middleware),

})

setupListeners(store.dispatch)
// Render the App component within the 'root' element in the HTML document
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(


  <Provider store={store}>

    <App />
  </Provider>

  // Find the HTML element with the id 'root' and render the App component inside it

);
