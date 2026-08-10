import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Call or Whatsapp: <span className="purple">+91 6396934224</span> | Email: <a href="mailto:kartikchauhan336@gmail.com" className="purple" style={{ textDecoration: "none" }}>kartikchauhan336@gmail.com</a>
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="mailto:kartikchauhan336@gmail.com"
                className="icon-colour home-social-icons"
                title="Email Me"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/ranakartikchauhan"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                title="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ranakartikchauhan/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/kartik_chauhan_336"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                title="Instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by KARTIK CHAUHAN</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} kartikResume</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ranakartikchauhan"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ranakartikchauhan/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/kartik_chauhan_336"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
