import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { skillIconLanguages, skillIconFrameworks, skillIconProductions } from '@/app/Components/objects/icons';

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
      <Row className='mt-5'>
        <Col className='d-flex justify-content-start'>
          <h2>Languages</h2>
        </Col>
        <Col className='d-flex justify-content-center'>
          <h2>Frameworks/Library</h2>
        </Col>
        <Col className='d-flex justify-content-end'>
          <h2>Production</h2>
        </Col>
      </Row>
      <div className='d-flex justify-content-center'>
        <Row className='skillBox d-flex align-items-center'>
          <Col>
            <Row style={{borderRight: '1px solid black'}}>
              {skillIconLanguages.map((skill: any) => {
                return (
                  <Col key={skill.text} lg={6} className='d-flex flex-column justify-content-center align-items-center iconShadow'>
                    <div>
                      {skill.icon}
                    </div>
                    <h3 className='mb-5'>
                      {skill.text}
                    </h3>
                  </Col>
                )
              })}
            </Row>
          </Col>
          <Col>
            <Row style={{borderRight: '1px solid black'}}>
              {skillIconFrameworks.map((skill: any) => {
                return (
                  <Col key={skill.text} lg={6} className='d-flex flex-column justify-content-center align-items-center iconShadow'>
                    <div>
                      {skill.icon}
                    </div>
                    <h3 className='mb-5 noWordWrap'>
                      {skill.text}
                    </h3>
                  </Col>
                )
              })}
            </Row>
          </Col>
          <Col>
            <Row>
              {skillIconProductions.map((skill: any) => {
                return (
                  <Col key={skill.text} lg={6} className='d-flex flex-column justify-content-center align-items-center iconShadow'>
                    <div>
                      {skill.icon}
                    </div>
                    <h3 className='mb-5 noWordWrap'>
                      {skill.text}
                    </h3>
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  )
}
