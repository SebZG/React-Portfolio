import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useNavigate } from 'react-router-dom';

import './Header.css'
import { useState } from 'react';

const Header = () => {
	const [activePage, setActivePage] = useState("Home");

	const navigate = useNavigate();

	const handleNavigation = (page) => {
		setActivePage(page);

		if (page === "Home") {
			navigate("/");
			return
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
					<Nav className="">
						<Nav.Link
							onClick={() => handleNavigation("Home")}
							className={activePage === "Home" ? "active" : ""}
						>
							Home
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