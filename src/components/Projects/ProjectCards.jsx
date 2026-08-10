import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view d-flex flex-column h-100">
      <div style={{ overflow: "hidden", borderRadius: "12px 12px 0 0", height: "200px" }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
          className="project-card-img"
        />
      </div>
      <Card.Body className="d-flex flex-column justify-content-between p-4">
        <div>
          <Card.Title style={{ fontWeight: "700", color: "#c770f0", marginBottom: "15px" }}>
            {props.title}
          </Card.Title>
          <Card.Text style={{ textAlign: "justify", fontSize: "0.95em", color: "#e2e8f0", lineHeight: "1.6" }}>
            {props.description}
          </Card.Text>
        </div>

        <div className="pt-3 d-flex flex-wrap gap-2">
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" className="d-inline-flex align-items-center gap-1">
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="outline-info"
              href={props.demoLink}
              target="_blank"
              className="d-inline-flex align-items-center gap-1"
              style={{ color: "#38bdf8", borderColor: "#38bdf8" }}
            >
              <CgWebsite /> &nbsp; Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
