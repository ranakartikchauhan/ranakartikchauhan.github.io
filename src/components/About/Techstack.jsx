import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
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
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiVite,
  SiJsonwebtokens,
  SiKubernetes,
  SiRender,
  SiGithubactions,
  SiOpenai,
  SiGoogle,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";
import {
  FaRobot,
  FaBrain,
  FaLink,
  FaProjectDiagram,
  FaDatabase,
  FaTerminal,
  FaLayerGroup,
  FaCogs,
  FaChartLine,
  FaNetworkWired,
  FaSearch,
} from "react-icons/fa";

function Techstack() {
  const programmingSkills = [
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
  ];

  const frontendSkills = [
    { name: "React.js", icon: <DiReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Vite", icon: <SiVite /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <DiNodejs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "REST APIs", icon: <DiNodejs /> },
    { name: "Socket.io", icon: <SiSocketdotio /> },
    { name: "JWT Authentication", icon: <SiJsonwebtokens /> },
  ];

  const aiSkills = [
    { name: "OpenAI APIs", icon: <SiOpenai style={{ color: "#10a37f" }} /> },
    { name: "Gemini API", icon: <SiGoogle style={{ color: "#4285f4" }} /> },
    { name: "LLMs", icon: <FaBrain style={{ color: "#a855f7" }} /> },
    { name: "LangChain", icon: <FaLink style={{ color: "#38bdf8" }} /> },
    { name: "LangGraph", icon: <FaProjectDiagram style={{ color: "#ec4899" }} /> },
    { name: "RAG Pipelines", icon: <FaDatabase style={{ color: "#f59e0b" }} /> },
    { name: "AI Agents", icon: <FaRobot style={{ color: "#6366f1" }} /> },
    { name: "Prompt Engineering", icon: <FaTerminal style={{ color: "#10b981" }} /> },
    { name: "Vector Databases", icon: <FaLayerGroup style={{ color: "#8b5cf6" }} /> },
    { name: "AI Workflow Automation", icon: <FaCogs style={{ color: "#06b6d4" }} /> },
    { name: "Hugging Face / PyTorch", icon: <SiPytorch style={{ color: "#ee4c2c" }} /> },
    { name: "LangFuse", icon: <FaChartLine style={{ color: "#ef4444" }} /> },
    { name: "Multi-Agent Systems", icon: <FaNetworkWired style={{ color: "#3b82f6" }} /> },
    { name: "Embeddings", icon: <SiTensorflow style={{ color: "#ff6f00" }} /> },
    { name: "Semantic Search", icon: <FaSearch style={{ color: "#14b8a6" }} /> },
  ];

  const dbSkills = [
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Pinecone", icon: <FaLayerGroup /> },
    { name: "ChromaDB", icon: <FaDatabase /> },
  ];

  const cloudDevOpsSkills = [
    { name: "AWS", icon: <SiAmazonaws /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Render", icon: <SiRender /> },
    { name: "GitHub Actions", icon: <SiGithubactions /> },
  ];

  return (
    <div style={{ paddingBottom: "20px" }}>
      {/* Programming Languages */}
      <h3 className="purple text-center my-3" style={{ color: "#c770f0" }}>
        Programming Languages
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        {programmingSkills.map((skill, idx) => (
          <Col xs={4} md={2} className="tech-icons" key={idx}>
            {skill.icon}
            <br />
            <div className="btn btn-outline-primary" style={{ marginTop: "10px" }}>
              {skill.name}
            </div>
          </Col>
        ))}
      </Row>

      {/* Frontend & Backend */}
      <h3 className="purple text-center my-3" style={{ color: "#c770f0" }}>
        Frontend & Backend Engineering
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        {[...frontendSkills, ...backendSkills].map((skill, idx) => (
          <Col xs={4} md={2} className="tech-icons" key={idx}>
            {skill.icon}
            <br />
            <div className="btn btn-outline-primary" style={{ marginTop: "10px" }}>
              {skill.name}
            </div>
          </Col>
        ))}
      </Row>

      {/* AI & Agentic AI */}
      <h3 className="purple text-center my-3" style={{ color: "#c770f0" }}>
        AI & Agentic AI Systems
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        {aiSkills.map((skill, idx) => (
          <Col xs={6} md={3} className="tech-icons" key={idx}>
            {skill.icon}
            <br />
            <div className="btn btn-outline-primary" style={{ marginTop: "10px", fontSize: "0.85em" }}>
              {skill.name}
            </div>
          </Col>
        ))}
      </Row>

      {/* Databases & Cloud/DevOps */}
      <h3 className="purple text-center my-3" style={{ color: "#c770f0" }}>
        Databases, Cloud & DevOps
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        {[...dbSkills, ...cloudDevOpsSkills].map((skill, idx) => (
          <Col xs={4} md={2} className="tech-icons" key={idx}>
            {skill.icon}
            <br />
            <div className="btn btn-outline-primary" style={{ marginTop: "10px" }}>
              {skill.name}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
