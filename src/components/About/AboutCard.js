import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          Hi, I’m  <span className="text-purple">Kartik Chauhan</span> , a Full-Stack Software Engineer
          with 3+ years of experience building scalable web applications and AI-powered systems using
          the MERN stack and modern AI frameworks. I work with LLMs, LangChain, LangGraph, RAG pipelines,
          and vector databases to build agentic AI workflows, alongside high-performance REST APIs, payment
          systems, and real-time architectures. I hold a B.Tech in Computer Science and have improved
          application performance by up to 40% through database and backend optimization. Let’s connect
          to create innovative solutions!
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
