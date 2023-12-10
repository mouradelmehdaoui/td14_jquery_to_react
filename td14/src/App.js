import { Routes, Route } from 'react-router-dom'
import './style/sass/main.css'
import Home from './pages/Home'
import Error from './pages/Error'
import Employee from './pages/Employee';
// In your main JavaScript/React entry file (e.g., index.js or App.js)
import 'bootstrap/dist/css/bootstrap.min.css';




export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/employee" element={<Employee />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	)
}
