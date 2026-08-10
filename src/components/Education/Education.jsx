import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <Container fluid className="education-section py-5" id="education">
      <Container>
        <h1 className="project-heading text-center mb-4">
          My <strong className="purple">Education</strong>
        </h1>
        <Row style={{ justifyContent: "center" }}>
          <Col md={8}>
            <Card className="quote-card-view p-4" style={{ backgroundColor: "#0c0517", border: "1px solid #c770f0", color: "white" }}>
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaGraduationCap size={40} className="purple me-3" style={{ color: "#c770f0" }} />
                  <div>
                    <h3 className="purple mb-0" style={{ color: "#c770f0", fontSize: "1.6em" }}>
                      Punjab Technical University
                    </h3>
                    <p className="text-white-50 mb-0">2019 – 2023</p>
                  </div>
                </div>
                <h5 className="text-info mb-2">
                  Bachelor of Technology (B.Tech) in Computer Science & Engineering
                </h5>
                <p style={{ textAlign: "justify", color: "#d1d1d1" }}>
                  Completed foundational and advanced coursework in Computer Science & Engineering, algorithms, data structures, database management systems, web technology, software engineering, and artificial intelligence.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
