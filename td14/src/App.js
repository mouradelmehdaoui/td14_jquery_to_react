import { Routes, Route } from 'react-router-dom'
import './style/main.css'
import Home from './pages/Home'
import Error from './pages/Error'
import Employee from './components/Employee'



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
