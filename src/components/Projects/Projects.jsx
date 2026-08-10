import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projectData } from "./ProjectData";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row className="g-4" style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((data, index) => (
            <Col key={index} lg={4} md={6} className="d-flex align-items-stretch">
              <ProjectCard
                imgPath={new URL(`../../Assets/Projects/${data.imgName}`, import.meta.url).href}
                isBlog={false}
                title={data.title}
                description={data.description}
                ghLink={data.ghLink}
                demoLink={data.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
