"use client"
import './page.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Intro from './Components/introduction/intro'
import Skills from './Components/skills/skills'
import Projects from './Components/projects/projects'

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Intro />
        </Col>
      </Row>
      <Row className='skills'>
        <Col>
          <Skills />
        </Col>
      </Row>
      <Row>
        <Col>
          <Projects />
        </Col>
      </Row>
    </Container>
  )
}
