import React from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import teradyneLogo from "../Header/TeradyneLogo.png"
import tugxLogo from "./tugxlogo.png"
import socialLogos from "./sociallogos.png"
import twitterCareers from "./twittercareers.png"
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
                    <Row className="align-items-center">
                        <Col className="subscribe-text" xs={12} lg={{span: 3, offset: 1}}>
                            Subscribe to Murali's newsletter
                        </Col>
                        <Col xs={12} lg={7}>
                            <Form>
                                <Form.Control type="email" />
                            </Form>
                        </Col>
                    </Row>
                    <Row className="align-items-center mt-5 flex-wrap">
                        <Col xs={12} lg={{span: 2, offset: 4}}>
                            <img src={tugxLogo} />
                        </Col>
                        <Col className="mt-4 my-lg-0" xs={12} lg={2}>
                            <img src={socialLogos} />
                        </Col>
                        <Col className="mt-4 my-lg-0" xs={12} lg={{span: 1, offset: 1}}>
                            <img src={twitterCareers} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="px-0 mx-lg-5 mt-5 flex-wrap">
                <Col className="px-0" xs={12} lg={3}>© Teradyne Inc. 1994-2019. All rights reserved.</Col>
                <Col xs={12} lg={1}>Sitemap</Col>
                <Col xs={12} lg={1}>Terms of Use</Col>
                <Col xs={12} lg={2}>Privacy Statement</Col>
            </Row>
        </Container>
    )
}

export default Footer
