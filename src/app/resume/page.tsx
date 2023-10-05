"use client"
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../Components/navbar';

export default function Resume() {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>
    </Container>
  )
}
