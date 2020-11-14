import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import eKnowledgeLogo from "./eknowledgelogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faSearch, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons"

import "./UtilityBar.css"
function UtilityBar() : JSX.Element {
    return (
        <Container fluid className="d-flex utility-bar justify-content-center">
            <Row className="justify-content-end utility-bar-buttons-container">
                <Col className="px-0" xs={3} lg={1}>
                    <Container fluid>
                        <Row className="utility-button-container">
                            <Col className="px-0" xs={1}><img src={eKnowledgeLogo} /></Col>
                            <Col className="px-0" xs={6}><a href="#eKnowledge" className="utility-button" title="eKnowledge">eKnowledge</a></Col>
                        </Row>
                    </Container>
                </Col> 
                <Col className="px-0" xs={3} lg={1}>
                    <Container fluid>
                        <Row className="utility-button-container">
                            <Col className="px-0" xs={1}><FontAwesomeIcon color="white" icon={faGlobeAmericas} /></Col>
                            <Col className="px-0" xs={6}><a className="utility-button" title="Language">Language </a></Col>
                            <Col className="px-0" xs={1}><FontAwesomeIcon color="white" icon={faChevronDown} /></Col>
                        </Row>
                    </Container>
                </Col> 
                <Col className="px-0" xs={3} lg={1}>
                    <Container fluid>
                        <Row className="utility-button-container">
                            <Col className="px-0" xs={1}><FontAwesomeIcon color="white" icon={faSearch} /></Col>
                            <Col className="px-0" xs={6}><a className="utility-button" title="Search">Search</a></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default UtilityBar
