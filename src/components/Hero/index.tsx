import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Button, Col, Row, Accordion, Card, Container } from "react-bootstrap"
import brandLogos from "./brandlogos"
import "./Hero.css"

function Hero(): JSX.Element {
    return (
        <div className="d-flex flex-column flex-lg-row hero justify-content-center">
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
            <Accordion className="d-flex mt-5 mt-lg-0 d-lg-block brands-drawer bg-white shadow">
                <Card>
                    <Card.Header>
                        <Row className="flex-wrap">
                            <Col xs={12} lg={2} className="teradyne-companies text-center justify-content-center"><h5 className="teradyne-companies-text">TERADYNE COMPANIES</h5></Col>
                            <Col xs={12} lg={10} className="teradyne-companies-description my-auto">
                                <h6 className="font-weight-bold">Teradyne companies provide lorem ipsum...</h6>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>

                                <Accordion.Toggle className="view-companies" as={Button} variant="link" eventKey="0">
                                        VIEW TERADYNE COMPANIES <FontAwesomeIcon icon={faCaretDown} />
                                </Accordion.Toggle>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 py-0">
                            <Container fluid className="w-100 brands-accordion-contents px-3 py-3">
                                <Row className="justify-content-center">
                                    <div className="w-50">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh . Click to visit.</div>
                                </Row>
                                <Row className="w-75 d-flex flex-wrap justify-content-center mt-4 mx-auto">
                                    {brandLogos.map((logo, index) => {
                                        return <Col className="justify-content-center align-items-center my-4" key={index} xs={12} lg={3}><img className="d-flex mx-auto" src={logo} /></Col>
                                    })}
                                </Row>
                            </Container>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>


        </div>
    )
}

export default Hero
