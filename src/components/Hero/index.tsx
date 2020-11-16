import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { Button, Col, Row, Accordion, Card } from "react-bootstrap"
import "./Hero.css"
function Hero(): JSX.Element {
    const [opened, setOpened] = useState(false)
    return (
        <div className="d-flex hero justify-content-center">
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
            <Accordion className="brands-drawer bg-white shadow">
                <Card>
                    <Card.Header>
                        <Row>
                            <Col className="teradyne-companies text-center justify-content-center" xs={2}><h5 className="teradyne-companies-text">TERADYNE COMPANIES</h5></Col>
                            <Col xs={10} className="teradyne-companies-description my-auto">
                                <h6 className="font-weight-bold">Teradyne companies provide lorem ipsum...</h6>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>

                                <Accordion.Toggle className="view-companies" as={Button} variant="link" eventKey="0">
                                        VIEW TERADYNE COMPANIES <FontAwesomeIcon icon={faCaretDown} />
                                </Accordion.Toggle>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Random Content</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>


        </div>
    )
}

export default Hero
