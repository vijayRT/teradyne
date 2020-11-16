import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import industry from "./industry.png"
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


import "./Industries.css"
function Industries(): JSX.Element {
    return (
        <Container fluid className="w-75 pt-5 industries-container">
            <Row>
                <Col>
                    <div className="text-center"><h1 className="expertise">Our expertise in industry</h1></div>
                    <div className="text-center my-3"><h5>Teradyne plays an integral role in the following technology industries that change the world.</h5></div>
                </Col>
            </Row>
            <Row className="mt-5 flex-wrap flex-lg-nowrap carousel-container">
                <Col lg={8}>
                    <img className="shadow rounded" src={industry} width="100%"/>
                </Col>
                <Col lg={4} className="flex-nowrap px-0">
                    <Row className="h-100 align-items-center flex-nowrap px-0">
                        <Col className="px-0" xs={1}><a href="" onClick={(e) => e.preventDefault()}><FontAwesomeIcon size="2x" icon={faArrowLeft} color="#3cb4e5"/></a></Col>
                        <Col className="d-flex flex-column flex-nowrap justify-content-center industrial-automation-content px-1">
                            <div className="d-flex text-center"><h2 className="font-weight-bold">Industrial Automation</h2></div>
                            <div className="d-flex industrial-automation-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere.</div>
                            <div className="d-flex industrial-automation-text"><Button className="explore-button" title="Learn More">EXPLORE THE INDUSTRIES WE SERVE</Button></div>
                            <div className="d-flex mt-3 flex-row carousel-dots">
                                <div className="d-flex"><span className="dot green"></span></div>
                                <div className="d-flex"><span className="dot"></span></div>
                                <div className="d-flex"><span className="dot"></span></div>
                                <div className="d-flex"><span className="dot"></span></div>
                                <div className="d-flex"><span className="dot"></span></div>
                                <div className="d-flex"><span className="dot"></span></div>
                                <div className="d-flex"><span className="dot"></span></div>
                                <div className="d-flex"><span className="dot"></span></div>
                                <div className="d-flex"><span className="dot"></span></div>
                                <div className="d-flex"><span className="dot"></span></div>
                            </div>
                        </Col>
                        <Col className="px-0" xs={1}><a href="" onClick={(e) => e.preventDefault()}><FontAwesomeIcon size="2x" icon={faArrowRight} color="#3cb4e5"/></a></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Industries
