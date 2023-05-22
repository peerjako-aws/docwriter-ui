import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom/client';
import "@cloudscape-design/global-styles/index.css"
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
