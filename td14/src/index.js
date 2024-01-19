import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './treatments/reduxtoolkit/store';
import mockEmployeeList from './data/mock'; // Import the mock data
import { addEmployee } from './treatments/reduxtoolkit/employeeSlice';

// CSS Styles
import './styles/sass/main.css';

// Dispatch the mock data to the store
mockEmployeeList.forEach((employee) => {
  store.dispatch(addEmployee(employee));
});

const root = createRoot(document.getElementById('root'));

/**
 * The main entry point for the application.
 * Renders the App component wrapped in Router and Redux Provider.
 *
 * @function
 * @returns {void}
 */
const renderApp = () => {
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </Provider>
  );
};

// Render the application
renderApp();
