import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import whitePaperCardImg from "./whitepaper.png"
import "./MegaMenu.css"

interface ComponentWithTitleProp {
    title: string
}

function ProductSnippet({title}: ComponentWithTitleProp): JSX.Element {
    return (
        <Col className="product-snippet" xs={12} lg={6}>
            <div className="product-snippet-title">{title}</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id libero.</div>
        </Col>
    )
}

function MegaMenu({title}: ComponentWithTitleProp): JSX.Element {
    return (
        <Container className="d-flex flex-wrap flex-lg-nowrap justify-content-start megamenu-container" fluid>
            <Row className="w-100">
                <Col xs={12} lg={3} className="py-lg-5 h-100 bg-white products-container">
                    <div className="title">{title}</div>
                    <div className="product"><a href ="" onClick={(e) => e.preventDefault()} className="product-name">Industrial Automation</a></div>
                    <div className="product"><a href ="" onClick={(e) => e.preventDefault()} className="product-name">Digital/Mixed Signal Testing</a></div>
                    <div className="product"><a href ="" onClick={(e) => e.preventDefault()} className="product-name">Linear, Power &amp; Automotive Testing</a></div>
                    <div className="product"><a href ="" onClick={(e) => e.preventDefault()} className="product-name">Micro-Controller / Image Sensor Testing</a></div>
                    <div className="product"><a href ="" onClick={(e) => e.preventDefault()} className="product-name">Printed Circuit Board Testing</a></div>
                    <div className="product"><a href ="" onClick={(e) => e.preventDefault()} className="product-name">Storage System / Level Testing</a></div>
                    <div className="product"><a href ="" onClick={(e) => e.preventDefault()} className="product-name">Wireless Testing</a></div>
                    <div className="product"><a href ="" onClick={(e) => e.preventDefault()} className="product-name">Defense &amp; Aerospace</a></div>
                </Col>
                <Col xs={12} lg={6} className="d-lg-flex product-content px-lg-5 py-5">
                    <Row className="flex-lg-wrap">
                        <ProductSnippet title="Test Station Handler" />
                        <ProductSnippet title="Test Station LX / LX2" />
                        <ProductSnippet title="Test Station Handler Large Format" />
                        <ProductSnippet title="Test Station Asynchronous" />
                        <ProductSnippet title="Test Station Station In-Line" />
                        <ProductSnippet title="Test Station Online" />
                        <ProductSnippet title="Test Station LHS" />
                    </Row>
                </Col>
                <Col xs={12} lg={3} className="product-highlight px-lg-5 py-5">
                    <Card className="shadow">
                        <Card.Img src={whitePaperCardImg} />
                        <Card.Body>
                            <Card.Title className="card-title">
                                <div className="purple white-paper my-3">
                                    WHITE PAPER
                                </div>
                                <div>
                                    The Importance of Testing
                                </div>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id libero. Lorem ipsum dolor sit amet
                                </div>
                                <div className="mt-4">
                                    <a className="white-paper-link" href="" onClick={(e) => e.preventDefault()} >Get the whitepaper</a>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default MegaMenu
