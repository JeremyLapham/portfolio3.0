import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import projectSet from "@/app/Components/objects/projectCardInfo";
import Image from "next/image";

export default function projects() {
  return (
    <Container
      fluid
      style={{ minHeight: "100vh" }}
      className="pageMargin"
      id="projects"
    >
      <Row>
        <Col>
          <h1 className="mt-5">Projects</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        {projectSet.map((projectItem: any) => {
          return (
            <Row key={projectItem.id}>
              <Col
                className={`d-flex flex-column ${
                  projectItem.id % 2 ? "align-items-start" : "align-items-end"
                } centerAll`}
              >
                <Row
                  className={`d-flex ${
                    projectItem.id % 2 ? "" : "flex-row-reverse"
                  } mb-5`}
                >
                  <Col
                    xl={7}
                    lg={12}
                    md={12}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Image
                      className="projectImage"
                      src={projectItem.img}
                      alt="Project"
                    />
                  </Col>
                  <Col
                    xl={5}
                    lg={12}
                    md={12}
                    className="projectName d-flex align-items-center justify-content-center text-center"
                  >
                    <h1>{projectItem.name}</h1>
                  </Col>
                </Row>
                <Row
                  className={`d-flex ${
                    projectItem.id % 2 ? "" : "flex-row-reverse"
                  }`}
                >
                  <Col
                    lg={
                      projectItem.projectRepo?.github?.icon ||
                      projectItem.projectAPIRepo?.github?.icon
                        ? 9 : 12
                    }
                  >
                    <h2
                      className={`d-flex ${
                        projectItem.id % 2
                          ? "justify-content-start"
                          : "justify-content-end"
                      }`}
                    >
                      {projectItem.languages}
                    </h2>
                  </Col>
                  <Col lg={projectItem.projectRepo?.github?.icon ? 2 : 0}>
                    <a
                      title={`${projectItem.projectRepo?.title}`}
                      href={projectItem.projectRepo?.repoLink}
                      className={`${
                        projectItem.id % 2 ? "" : "flex-row-reverse"
                      } repoText`}
                      target="_blank"
                    >
                      <h3>{projectItem.projectRepo?.github?.icon}</h3>
                      <h6 className="text-center">
                        {projectItem.projectRepo?.github?.text}
                      </h6>
                    </a>
                  </Col>
                  <Col lg={projectItem.projectAPIRepo?.github?.icon ? 1 : 0}>
                    <a
                      title={`${projectItem.projectAPIRepo?.title}`}
                      href={projectItem.projectAPIRepo?.repoLink}
                      className={`${
                        projectItem.id % 2 ? "" : "flex-row-reverse"
                      } repoText`}
                      target="_blank"
                    >
                      <h3>{projectItem.projectAPIRepo?.github?.icon}</h3>
                      <h6 className="text-center">
                        {projectItem.projectAPIRepo?.github?.text}
                      </h6>
                    </a>
                  </Col>
                </Row>
                <Row className="projectIconBox justify-content-evenly">
                  {projectItem.languageIcon.map((icon: any) => {
                    return (
                      <Col
                        key={icon.text}
                        lg={projectItem.languageIcon.length > 3 ? 2 : 3}
                        className="d-flex flex-column align-items-center justify-content-between mt-1 mb-1"
                      >
                        <div>{icon.icon}</div>
                      </Col>
                    );
                  })}
                </Row>
                <Row>
                  <Col className="d-flex justify-content-center mt-3">
                    <Button
                      variant=""
                      className="checkItOutBtn"
                      href={projectItem.linkToSite}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Check it out!
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3 className="mt-3 mb-5 text-center">
                      {projectItem.description}
                    </h3>
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })}
      </Row>
    </Container>
  );
}
