import React from 'react';
import ReactDOM from 'react-dom/client';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './treatments/reduxtoolkit/store';

// CSS Styles
import "./styles/sass/main.css";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AlertProvider template={AlertTemplate} {...options}>
        <Router>
          <App />
        </Router>
      </AlertProvider>
    </React.StrictMode>
  </Provider>
);
