import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import "./MegaMenu.css"

function MegaMenu(): JSX.Element {
    return (
        <Container className="justify-content-start megamenu-container" fluid>
            <Row>
                <Col>
                    <div className="title">Products</div>
                    <div className="product">Industrial Automation</div>
                    <div className="product">Digital/Mixed Signal Testing</div>
                    <div className="product">Industrial Automation</div>
                    <div className="product">Industrial Automation</div>
                    <div className="product">Industrial Automation</div>
                    <div className="product">Industrial Automation</div>
                    <div className="product">Industrial Automation</div>
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default MegaMenu
