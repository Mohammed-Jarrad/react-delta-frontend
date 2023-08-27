import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles'
import Home from './pages/Home'
import PricingPage from './pages/PricingPage'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<Router>
			<GlobalStyle />

			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pricing" element={<PricingPage />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
