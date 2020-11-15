import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import wedge from "./wedge.png"
import tugx from "./TUGx.png"
import "./NewsAndEvents.css"

function NewsAndEvents(): JSX.Element {
    const news = ["In the News", "Press Release", "Event"]
    return (
        <Container fluid className="w-75 pt-5 news-and-events-container">
            <Row>
                <Col>
                    <div className="text-center"><h1 className="newsAndEventsTitle">News &amp; Events</h1></div>
                </Col>
            </Row>
            <Row className="mt-5 flex-wrap flex-lg-nowrap align-items-center carousel-container">
                <Col className="d-flex flex-column news-column" lg={9}>
                    {news.map((newsItem) => { return (
                        <Row key={newsItem} className="flex-nowrap news-container">
                            <Col xs={3}><h4 className="font-weight-bold"><img src={wedge} /> &nbsp; {newsItem}</h4></Col>
                            <Col xs={8} className="d-flex flex-column flex-nowrap">
                                <Row><h5>Lorem Ipsum dolor sit dior tempor e amet, consectetur adipiscing magma en tuita</h5></Row>
                                <Row>August 28, 2019  Lorem ipsum dolor sit amet, dior sem sed do... &nbsp;<a className="read-more-link" href="" onClick={(e) => e.preventDefault()} >Read More</a></Row>
                            </Col>
                        </Row>
                    )})}
                    <Row>
                        <Col xs={3}></Col>
                        <Col xs={9} className="px-0"><Button className="view-all-button" title="View All">VIEW ALL IN NEWSROOM</Button></Col>
                    </Row>
                </Col>
                <Col lg={3} className="d-flex flex-column py-5 px-5 flex-nowrap tugx-container">
                    <Row className="d-flex">
                        <img src={tugx} height="45" />
                    </Row>
                    <Row>
                        <h3>Teradyne Users Group</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </Row>
                    <Row>
                    UPCOMING EVENTS<br />
                    San Jose, CA - 10 Sept 2019<br />
                    Irvine, CA - 17 Sept 2019<br />
                    United Kingdom - 17 Sept 2019<br />
                    San Diego, CA - 18 Sept 2019<br />
                    </Row>
                    <Row>
                        <Button className="view-all-button" title="View All">VIEW ALL TUGX EVENTS</Button>
                    </Row>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default NewsAndEvents