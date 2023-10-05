"use client"
import './page.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Intro from '@/app/Components/intro'
import Skills from '@/app/Components/skills'
import Projects from '@/app/Components/projects'
import ContactMe from '@/app/Components/contactMe'
import MouseEffect from '@/app/Components/mouseEffect'

export default function Home() {
  return (
    <Container fluid>
        <MouseEffect />
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
