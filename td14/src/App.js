import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import CreateEmployee from './pages/CreateEmployee';


// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";



export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/employees" element={<CreateEmployee />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	)
}
