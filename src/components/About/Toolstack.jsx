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
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          {tool.icon}
          <br />
          <div className="btn btn-outline-primary" style={{ marginTop: "10px" }}>
            {tool.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
