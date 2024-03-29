import { useRouter } from "next/router";
import React from "react";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";

export function Header() {
  const router = useRouter();
  const basePath = router.asPath === "/" ? "#" : "/#";
  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
      <div className="container">
        <Navbar.Brand href={`${basePath}`}>Remo Jansen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={`${basePath}about`}>About</Nav.Link>
            <Nav.Link href={`${basePath}work`}>Work</Nav.Link>
            <Nav.Link href={`${basePath}education`}>Education</Nav.Link>
            <Nav.Link href={`${basePath}awards`}>Awards</Nav.Link>
            <Nav.Link href={`${basePath}books`}>Books</Nav.Link>
            <Nav.Link href={`${basePath}projects`}>Projects</Nav.Link>
            <Nav.Link href={`${basePath}talks`}>Talks</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
