import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function NavigationTop() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img
						src={Logo}
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
						style={{ marginRight: '10px' }}
					/>
					PuppetMaster
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/scrape">
							Scrape
						</Nav.Link>
						<Nav.Link as={Link} to="/logs">
							Logs
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link as={Link} to="/settings">
							Settings
						</Nav.Link>
						<Nav.Link href="#memes">Sign Out</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavigationTop;
