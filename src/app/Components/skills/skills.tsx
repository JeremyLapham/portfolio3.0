import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { skillIconLanguages, skillIconFrameworks, skillIconProductions } from '@/app/objects/icons';
import MouseEffect from '../mouseEffect/mouseEffect';

export default function Skills() {
  return (
    <Container fluid className='pageMargin' id='skills'>
      <Row>
        <Col>
          <h1 className='mt-5'>
            Skills
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center'>
          <h2>Languages</h2>
        </Col>
        <Col className='d-flex justify-content-center'>
          <h2>Frameworks</h2>
        </Col>
        <Col className='d-flex justify-content-center'>
          <h2>Production</h2>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <Row className='skillBoxes'>
            <MouseEffect />
            {skillIconLanguages.map((skill: any) => {
              return (
                <Col lg={6} className='d-flex flex-column justify-content-center align-items-center'>
                  <div>
                    {skill.icon}
                  </div>
                  <h3>
                    {skill.text}
                  </h3>
                </Col>
              )
            })}
          </Row>
        </Col>
        <Col>
          <Row className='skillBoxes'>
            {skillIconFrameworks.map((skill: any) => {
              return (
                <Col lg={6} className='d-flex flex-column justify-content-center align-items-center'>
                  <div>
                    {skill.icon}
                  </div>
                  <h3>
                    {skill.text}
                  </h3>
                </Col>
              )
            })}
          </Row>
        </Col>
        <Col>
          <Row className='skillBoxes'>
            {skillIconProductions.map((skill: any) => {
              return (
                <Col lg={6} className='d-flex flex-column justify-content-center align-items-center'>
                  <div>
                    {skill.icon}
                  </div>
                  <h3>
                    {skill.text}
                  </h3>
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
