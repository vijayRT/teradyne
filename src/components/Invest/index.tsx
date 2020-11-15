import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"

import "./Invest.css"
function Invest(): JSX.Element {
    return (
        <Container fluid className="d-flex flex-column invest-container justify-content-center mt-5">
            <Row className="d-flex hero-text-container pl-5 align-content-center">
                <Col className="pl-5" lg={5}>
                    <div>
                        <h1 className="invest-title">Invest in Innovation</h1>
                        <p>Innovation is at the core of what we do. We’re backed by a global team of proven experts, dedicated to ensuring that the technologies that power our lives work the way they were intended. </p>
                    </div>
                    <div className="mt-4">
                        <Button className="contact-us-button" title="Contact US">CONTACT US</Button>
                    </div>
                </Col>
            </Row>
            <Row className="d-flex flex-wrap justify-content-center flex-lg-nowrap records">
                <Col xs={12} lg={3}>
                    <h1 className="text-center invest-number">687</h1>
                    <p className="text-center invest-text">PATENTS</p>
                </Col>
                <Col xs={12} lg={3}>
                    <h1 className="text-center invest-number">$2.1B</h1>
                    <p className="text-center invest-text">ANNUAL REVENUE</p>
                </Col>
                <Col xs={12} lg={3}>
                    <h1 className="text-center invest-number">52.76</h1>
                    <p className="text-center invest-text">NASDAQ:TER +0.105</p>
                    <p className="text-center text-white">08.30.19 | 10:00 AM EST</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Invest
