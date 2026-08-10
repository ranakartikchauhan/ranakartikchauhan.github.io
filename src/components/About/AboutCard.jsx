import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kartik Chauhan</span> from <span className="purple">Bengaluru, India</span>.
            <br />
            I am a <span className="purple">Full Stack Engineer</span>, <span className="purple">AI Engineer</span>, and <span className="purple">Agentic AI Developer</span> with 3+ years of experience.
            <br />
            I hold a Bachelor of Technology (B.Tech) in Computer Science & Engineering from <span className="purple">Punjab Technical University</span> (2019 – 2023).
            <br />
            <br />
            Experienced in building scalable web applications and AI-powered systems used by thousands of users using the MERN stack and modern AI frameworks (LLMs, LangChain, LangGraph, RAG pipelines, vector databases).
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
