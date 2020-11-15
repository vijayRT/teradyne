import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import teradyneLogo from "../Header/TeradyneLogo.png"

import "./Footer.css"
function Footer(): JSX.Element {
    return (
        <Container fluid className="teradyne-footer px-5 py-5">
            <Row className="mx-lg-5 mt-3"><img src={teradyneLogo} /></Row>
            <Row className="d-flex mx-lg-5 mt-5 px-0">
                <Col className="d-flex px-0 flex-wrap flex-lg-nowrap links-columns-container" xs={12} lg={6}>
                    <Col className="d-flex flex-column links-column" xs={12} lg={6}>
                        <Row className="px-0"><a href="" onClick={(e) => e.preventDefault()}>About Us</a></Row>
                        <Row className="px-0"><a href="" onClick={(e) => e.preventDefault()}>Management</a></Row>
                        <Row className="px-0"><a href="" onClick={(e) => e.preventDefault()}>Locations</a></Row>
                        <Row className="px-0"><a href="" onClick={(e) => e.preventDefault()}>Corporate Social Responsibility</a></Row>
                    </Col>
                    <Col className="d-flex flex-column links-column" xs={12} lg={6}>
                        <Row className="px-0"><a href="" onClick={(e) => e.preventDefault()}>Investor Relations</a></Row>
                        <Row className="px-0"><a href="" onClick={(e) => e.preventDefault()}>Careers</a></Row>
                        <Row className="px-0"><a href="" onClick={(e) => e.preventDefault()}>Events &amp; Conferences</a></Row>
                        <Row className="px-0"><a href="" onClick={(e) => e.preventDefault()}>Press Room</a></Row>
                    </Col>
                </Col>
                <Col xs={12} lg={6}>
                    <Row>
                        <Col className="subscribe-text" xs={12} lg={{span: 3, offset: 1}}>
                            Subscribe to our newsletter
                        </Col>
                        <Col xs={12} lg={7}>
                            <input className="w-75 subscribe-input" type="email"></input>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
