import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function contactMe() {
    return (
        <Container fluid className='pageMargin' id='contact'>
            <Row>
                <Col>
                    <h1 className='mt-5'>
                        Contact Me
                    </h1>
                </Col>
            </Row>
        </Container>
    )
}
