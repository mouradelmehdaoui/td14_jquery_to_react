import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Employee from './pages/Employee';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";

// CSS Styles
import "./styles/sass/main.css";

/**
 * App component is the root component of the application, defining the routing structure.
 *
 * @component
 * @returns {JSX.Element} React component
 */
export default function App() {
  return (
    <>
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<Home />} />

        {/* Route for the Employee page */}
        <Route path="/employees" element={<Employee />} />

        {/* Default Route for the Error page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
