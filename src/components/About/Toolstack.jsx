import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiJira,
  SiSwagger,
} from "react-icons/si";
import { DiGit } from "react-icons/di";

function Toolstack() {
  const tools = [
    { name: "Git", icon: <DiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Swagger", icon: <SiSwagger /> },
    { name: "Jira", icon: <SiJira /> },
    { name: "VS Code", icon: <SiVisualstudiocode /> },
  ];

  return (
    <Row className="g-3 justify-content-center pb-5">
      {tools.map((tool, idx) => (
        <Col xs={6} sm={4} md={3} lg={2} key={idx}>
          <div className="tech-icon-card">
            <div className="tech-icon-svg">{tool.icon}</div>
            <span className="tech-icon-label">{tool.name}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
