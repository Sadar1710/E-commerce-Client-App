import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useStore } from '../stores/store';


export default function NavBar(){

    const {productStore}=useStore();

    return(
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Button onClick={()=>productStore.openForm()} variant="success">Create Product</Button>
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
} 