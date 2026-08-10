import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Designer.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About </span> Me
            </h1>
            <p className="home-about-body">
              Full-Stack Software Engineer & AI Developer based in <span className="purple">Bengaluru, India</span> with 3+ years of experience building scalable web applications and AI-powered systems used by thousands of users using the MERN stack and modern AI frameworks.
              <br /><br />
              Experienced in high-performance applications, REST APIs, payment systems, real-time architectures, scalable backend architecture, cloud deployment, vector databases, AI automation systems, RAG pipelines, LLM integrations, LangChain, and LangGraph.
              <br /><br />
              Improved application performance by up to <span className="purple">40%</span> through database optimization and scalable frontend engineering, with strong problem-solving skills across production-grade applications and full-stack development.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
   
      </Container>
    </Container>
  );
}
export default Home2;
