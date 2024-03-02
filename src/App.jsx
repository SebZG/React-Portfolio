import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ProjectGallery from './pages/ProjectGallery';
import Contact from './pages/Contact/Contact';

const App = () => {

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<ProjectGallery />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	)
}

export default App;