import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import applicationLogos from "./applicationLogos"
import "./Applications.css"
function Applications(): JSX.Element {
    const applicationNames = ["Industrial Automation", "Semiconductor Testing", "Wireless Testing", "Storage Testing", "Printed Circuit Board Testing", "System Level Testing", "Defense & Aerospace"]
    return (
        <Container fluid className="applications-section-container">
            <Row>
                <Col>
                    <div className="text-center"><h1 className="applications-title">Find us by application</h1></div>
                    <div className="applications-subtitle text-center my-3 mx-auto"><h5>From life-saving healthcare and automotive safety to the consumer tech we use every day – the world relies on Teradyne to make sure critical electronics work, every single time.</h5></div>
                    <Row className="d-flex flex-wrap flex-lg-nowrap justify-content-center application-logos">
                        {applicationLogos.map((applicationLogo, index) => {
                            return (
                                <Col className="d-flex flex-column align-end application-logo-name-container" key={index} xs={4} lg={1}>
                                    <img className="h-50" src={applicationLogo} />
                                    <div className="d-flex justify-content-center text-center">{applicationNames[index]}</div>
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Applications
