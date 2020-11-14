import React, { useState } from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import teradyneLogo from "./TeradyneLogo.png"
import "./Header.css"
import MegaMenu from "../MegaMenu"

function Header() : JSX.Element {

    const [isShown, setIsShown] = useState(-1)
    const navItems = ["Products", "Industries", "Applications", "Services", "Support", "Company"]
    const showDropdown = (dropdownIndex: number) => {
        setIsShown(dropdownIndex)
    }
    const hideDropdown = () => {
        setIsShown(-1)
    }
    return (
        <div className="d-lg-flex align-content-lg-center shadow justify-content-lg-center">
            <Navbar className="d-lg-flex header-container header" expand="lg">
                <Navbar.Brand className="d-lg-flex"><img src={teradyneLogo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onTouchEnd={hideDropdown}/>
                <Navbar.Collapse className="d-lg-flex row-lg justify-content-lg-end" id="basic-navbar-nav">
                    <Nav className="bg-white">
                        {navItems.map((item, index) => {
                            return (
                                <NavDropdown
                                    key={index}
                                    show={isShown === index}
                                    onTouchEnd={() => showDropdown(index)}
                                    onMouseEnter={() => showDropdown(index)} 
                                    className="d-lg-flex header-link col-lg cols-2 has-megamenu" title={<span className="header-link">{item}</span>} id={"products-nav-dropdown"}>
                                    <NavDropdown.ItemText className="shadow" onMouseLeave={hideDropdown}><MegaMenu title={item} /></NavDropdown.ItemText>
                                </NavDropdown>
                            )
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
