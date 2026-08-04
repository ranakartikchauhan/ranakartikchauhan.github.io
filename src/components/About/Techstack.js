import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiTypescript,
  SiPython,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiMysql,
  SiDocker,
  SiAmazonaws,
  SiSocketdotio,
  SiCplusplus,
} from "react-icons/si";
import { FaRobot } from "react-icons/fa";

function Techstack() {
  return (
    <div style={{ paddingBottom: "20px" }}>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
          <br />
          <div className="btn btn-outline-primary">JavaScript</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
          <br />
          <div className="btn btn-outline-primary">TypeScript</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPython />
          <br />
          <div className="btn btn-outline-primary">Python</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCplusplus />
          <br />
          <div className="btn btn-outline-primary">C++</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
          <br />
          <button className="btn btn-outline-primary">React.js</button>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedux />
          <br />
          <button className="btn btn-outline-primary">Redux</button>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTailwindcss />
          <br />
          <button className="btn btn-outline-primary">Tailwind CSS</button>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
          <br />
          <div className="btn btn-outline-primary">Node.js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress />
          <br />
          <button className="btn btn-outline-primary">Express.js</button>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSocketdotio />
          <br />
          <button className="btn btn-outline-primary">Socket.io</button>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
          <br />
          <button className="btn btn-outline-primary">MongoDB</button>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
          <br />
          <button className="btn btn-outline-primary">MySQL / SQL</button>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDocker />
          <br />
          <button className="btn btn-outline-primary">Docker</button>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazonaws />
          <br />
          <button className="btn btn-outline-primary">AWS</button>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
          <br />
          <button className="btn btn-outline-primary">Git</button>
        </Col>
      </Row>

      <h1 className="project-heading">
        <strong className="purple">AI & Agentic AI</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        {[
          "LLMs",
          "LangChain",
          "LangGraph",
          "RAG",
          "AI Agents",
          "Prompt Engineering",
          "Vector Databases",
          "OpenAI API",
          "Gemini API",
          "Hugging Face",
          "Multi-Agent Systems",
          "Embeddings & Semantic Search",
        ].map((skill) => (
          <Col xs={6} md={2} className="tech-icons" key={skill}>
            <FaRobot />
            <br />
            <button className="btn btn-outline-primary">{skill}</button>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
