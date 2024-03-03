import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import './Header.css';

const Header = () => {
	const [activePage, setActivePage] = useState(() => {
		const storedPage = localStorage.getItem("activePage");
		return storedPage || "About";
	});

	const navigate = useNavigate();

	const handleNavigation = (page) => {
		setActivePage(page);
		localStorage.setItem("activePage", page);

		if (page === "About") {
			navigate("/");
		}
		if (page === "Projects") {
			navigate("/projects");
		}
		if (page === "Contact") {
			navigate("/contact");
		}
	}

	// const logo = "{SZG}"
	const logo = "SZG()"

	return (
		<Navbar sticky="top" expand="sm" className="navbar">
			<Container className=''>
				<Navbar.Brand className='logo'>{logo}</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Nav variant='' className="">
						<Nav.Link
							onClick={() => handleNavigation("About")}
							className={activePage === "About" ? "active" : ""}
						>
							About
						</Nav.Link>
						<Nav.Link
							onClick={() => handleNavigation("Projects")}
							className={activePage === "Projects" ? "active" : ""}
						>
							Projects
						</Nav.Link>
						<Nav.Link
							onClick={() => handleNavigation("Contact")}
							className={activePage === "Contact" ? "active" : ""}
						>
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar >
	)
}
export default Header;