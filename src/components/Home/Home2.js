import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Designer.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              Results-driven Full-Stack Software Engineer with 3+ years of experience building scalable web
              applications and AI-powered systems used by thousands of users, using the MERN stack
              (MongoDB, Express.js, React, Node.js) and modern AI frameworks. Currently building AI-powered
              healthcare workflows, agentic AI pipelines, and RAG-based systems using LangChain, LangGraph,
              and vector databases. Skilled in building scalable RESTful APIs, optimizing database performance,
              and delivering end-to-end solutions, with backend and API performance improvements of up to
              40% through database optimization and scalable architecture. Experienced in problem solving,
              code optimization, and collaboration in Agile environments to deliver high-quality software.
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
