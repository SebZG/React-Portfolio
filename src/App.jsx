import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';
import ProjectGallery from './pages/ProjectGallery';
import Contact from './pages/Contact';

const App = () => {

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/projects" element={<ProjectGallery />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	)
}

export default App;