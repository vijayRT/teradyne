import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import teradyneLogo from "./TeradyneLogo.png"
import "./Header.css"
import MegaMenu from "../MegaMenu"

function Header() : JSX.Element {
    return (
        <div className="d-flex align-content-center shadow justify-content-lg-center">
            <Navbar className="d-lg-flex header-container header" expand="lg">
                <Navbar.Brand className="d-lg-flex"><img src={teradyneLogo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="d-lg-flex row-lg justify-content-lg-end" id="basic-navbar-nav">
                    <Nav>
                        <NavDropdown className="d-lg-flex header-link col-lg cols-2 has-megamenu" title={<span className="header-link">Products</span>} id="products-nav-dropdown">
                            <NavDropdown.ItemText className="shadow"><MegaMenu title="Products" /></NavDropdown.ItemText>
                        </NavDropdown>
                        <NavDropdown className="d-lg-flex header-link col-lg cols-2 has-megamenu" title={<span className="header-link">Industries</span>} id="industries-nav-dropdown">
                            <NavDropdown.ItemText className="shadow"><MegaMenu title="Industries" /></NavDropdown.ItemText>
                        </NavDropdown>
                        <NavDropdown className="d-lg-flex header-link col-lg cols-2 has-megamenu" title={<span className="header-link">Applications</span>} id="Applications-nav-dropdown">
                            <NavDropdown.ItemText className="shadow"><MegaMenu title="Applications" /></NavDropdown.ItemText>
                        </NavDropdown>
                        <NavDropdown className="d-lg-flex header-link col-lg cols-2 has-megamenu" title={<span className="header-link">Services</span>} id="Services-nav-dropdown">
                            <NavDropdown.ItemText className="shadow"><MegaMenu title="Services" /></NavDropdown.ItemText>
                        </NavDropdown>
                        <NavDropdown className="d-lg-flex header-link col-lg cols-2 has-megamenu" title={<span className="header-link">Support</span>} id="support-nav-dropdown">
                            <NavDropdown.ItemText className="shadow"><MegaMenu title="Support" /></NavDropdown.ItemText>
                        </NavDropdown>
                        <NavDropdown className="d-lg-flex header-link col-lg cols-2 has-megamenu" title={<span className="header-link">Company</span>} id="company-nav-dropdown">
                            <NavDropdown.ItemText className="shadow"><MegaMenu title="Company" /></NavDropdown.ItemText>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
