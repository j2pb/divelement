import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import {
    useHistory,
} from "react-router-dom";
import config from '../config'

const NavigationBar = (props) => {
    const history = useHistory();

    const goTo = (route) => {
        history.push(route)
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" >{config.projectName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav className="d-flex">
                        <Nav.Link href="#" onSelect={(e) => goTo('/history')}>history</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}
export default NavigationBar;