import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Employee from './pages/Employee';


// // Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";

// CSS Styles
import "./styles/sass/main.css";

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/employees" element={<Employee />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	)
}
