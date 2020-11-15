import React from "react"
import { Button, Col, Row } from "react-bootstrap"

import "./Hero.css"
function Hero(): JSX.Element {
    return (
        <div className="d-flex hero">
            <Row className="hero-text-container align-content-center px-5">
                <Col lg={6}>
                    <div>
                        <h1 className="hero-text">Creating the next generation of technology through advanced test solutions and collaborative robotics.</h1>
                    </div>
                    <div className="mt-4">
                        <Button className="learn-more-button" title="Learn More">LEARN MORE ABOUT TERADYNE</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Hero
