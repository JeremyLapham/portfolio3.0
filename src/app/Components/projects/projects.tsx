import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function projects() {
  return (
    <Container fluid style={{ minHeight: '100vh' }} className='pageMargin' id='projects'>
      <Row>
        <Col>
          <h1 className='mt-5'>
            Projects
          </h1>
        </Col>
      </Row>
    </Container>
  )
}
