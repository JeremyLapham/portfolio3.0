"use client"
import './page.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Intro from './Components/introduction/intro'
import Skills from './Components/skills/skills'
import Projects from './Components/projects/projects'
import ContactMe from './Components/contactMe/contactMe'

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Intro />
        </Col>
      </Row>
      <Row className='secondBG'>
        <Col>
          <Skills />
        </Col>
      </Row>
      <Row>
        <Col>
          <Projects />
        </Col>
      </Row>
      <Row className='secondBG'>
        <Col>
          <ContactMe />
        </Col>
      </Row>
    </Container>
  )
}
