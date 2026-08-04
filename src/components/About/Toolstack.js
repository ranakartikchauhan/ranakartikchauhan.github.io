import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiJira,
  SiSwagger,
  SiKubernetes,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <br />
        <button className="btn btn-outline-primary">VS Code</button>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <br />
        <button className="btn btn-outline-primary">GitHub</button>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <br />
        <button className="btn btn-outline-primary">Postman</button>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger />
        <br />
        <button className="btn btn-outline-primary">Swagger</button>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <br />
        <button className="btn btn-outline-primary">Jira</button>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
        <br />
        <button className="btn btn-outline-primary">Kubernetes</button>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
        <br />
        <button className="btn btn-outline-primary">Pinecone / ChromaDB</button>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <br />
        <button className="btn btn-outline-primary">Vercel</button>
      </Col>
    </Row>
  );
}

export default Toolstack;
