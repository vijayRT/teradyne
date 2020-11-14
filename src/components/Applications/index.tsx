import React from "react"
import { Col, Container, Row } from "react-bootstrap"

import "./Applications.css"
function Applications(): JSX.Element {
    return (
        <Container fluid className="d-flex justify-content-center applications-container">
            <Row className="d-flex w-75">
                <Col className="d-flex justify-content-center">
                    <div className="text-center"><h1 className="applications-title">Find us by application</h1></div>
                    <div className="text-center my-3"><h5>From life-saving healthcare and automotive safety to the consumer tech we use every day – the world relies on Teradyne to make sure critical electronics work, every single time.</h5></div>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Applications
