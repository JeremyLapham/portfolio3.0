import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import projectSet from '@/app/objects/projectCardInfo';
import Image from 'next/image';

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
      <Row className='mt-5'>
        {projectSet.map((projectItem: any) => {
          return (
            <Row key={projectItem.id}>
              <Col className={`d-flex flex-column ${projectItem.id % 2 ? 'align-items-start' : 'align-items-end'}`}>
                <Row className={`d-flex ${projectItem.id % 2 ? '' : 'flex-row-reverse'}`}>
                  <Col>
                    <Image className='projectImage' src={projectItem.img} alt="Project" />
                  </Col>
                  <Col className='projectName d-flex align-items-center justify-content-center text-center'>
                    <h1>{projectItem.name}</h1>
                  </Col>
                </Row>
                <Row>
                  <Col lg={projectItem.projectRepo?.github?.icon ? 10 : 12 }>
                    <h2>{projectItem.languages}</h2>
                  </Col>
                  <Col lg={projectItem.projectRepo?.github?.icon ? 2 : 0 }>
                    <a title={`${projectItem.projectRepo?.title ?? null}`} href={projectItem.projectRepo?.repoLink ?? null} className="repoText d-flex" target="_blank">
                      <h3>
                        {projectItem.projectRepo?.github?.icon ?? null}
                      </h3>
                      <h6 className='text-center'>
                        {projectItem.projectRepo?.github?.text ?? null}
                      </h6>
                    </a>
                  </Col>
                </Row>
                <Row className='projectIconBox justify-content-between'>
                  {projectItem.languageIcon.map(
                    (icon: any) => {
                      return (
                        <Col key={icon.icon} lg={projectItem.languageIcon.length > 3 ? 2 : 3} className='d-flex flex-column align-items-center justify-content-between mt-1 mb-1' >
                          <div>{icon.icon}</div>
                        </Col>
                      );
                    }
                  )}
                </Row>
                <h3 className='mt-3'>{projectItem.description}</h3>
                <div className="d-flex justify-content-center">
                  <a
                    className="mb-5"
                    href={projectItem.linkToSite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check it out!
                  </a>
                </div>
              </Col>
            </Row>
          );
        })}
      </Row>
    </Container>
  )
}
