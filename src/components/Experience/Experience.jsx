import React, { useState } from "react";
import "./experince.css";

function Experience() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const experiences = [
    {
      title: "Associate Delivery Level 3",
      company: "SmartData Enterprises Inc. – Dehradun, Uttarakhand, India",
      period: "Jan 2026 – Present",
      bullets: [
        "Working on scalable healthcare sector applications with a focus on backend architecture, AI workflows, and enterprise-grade system development.",
        "Developed AI-powered workflows for report generation, audio report processing, automated summarization, and intelligent admin dashboards.",
        "Built scalable backend APIs and optimized data-processing workflows improving system efficiency and reducing manual operations.",
        "Contributed to optimization initiatives that improved API response performance and reduced backend processing overhead by approximately 35%.",
        "Collaborated with cross-functional teams using Agile methodologies and modern development workflows.",
        "Improved application performance, maintainability, and scalability across multiple production-grade healthcare projects.",
      ],
    },
    {
      title: "Technology Senior Executive",
      company: "Pearl Organisation – Dehradun, Uttarakhand, India",
      period: "May 2025 – Jan 2026",
      bullets: [
        "Managed and delivered 20+ projects including eCommerce platforms, vehicle booking systems, tour booking applications, and business management solutions.",
        "Handled multiple client projects simultaneously while ensuring timely delivery, production stability, and business-critical workflow support.",
        "Developed scalable web applications and backend services, improving frontend responsiveness through optimized rendering and reusable UI architecture.",
        "Integrated secure payment gateway systems and scalable backend workflows for high-traffic applications while supporting debugging, testing, deployment, and production operations.",
      ],
    },
    {
      title: "Software Developer",
      company: "Codementees – Bengaluru, Karnataka, India",
      period: "Sep 2024 – May 2025",
      bullets: [
        "Developed a Full-Stack Mentorship Platform using MERN stack, connecting hundreds of mentees with experienced tech mentors.",
        "Built scalable backend APIs supporting authentication, real-time communication, and content management features, including Socket.io messaging that increased engagement by 20%.",
        "Optimized MongoDB queries, aggregation pipelines, and indexing strategies, improving database performance by 40% and reducing API response times significantly.",
        "Improved frontend maintainability and performance by building reusable React components, eliminating repetitive code, developing SEO-friendly pages, and applying Next.js server-side rendering best practices.",
      ],
    },
    {
      title: "MERN Stack Developer",
      company: "Quitepaper – Bikaner, Rajasthan, India",
      period: "Jul 2023 – Aug 2024",
      bullets: [
        "Designed and developed a scalable Library Management System with seat booking and CRM functionality used by multiple organizations.",
        "Engineered backend workflows and optimized query execution to improve booking efficiency and reduce system latency.",
        "Built an automated seat allocation algorithm reducing booking conflicts by 30% and implemented real-time notifications to improve platform responsiveness.",
        "Integrated secure payment gateway systems capable of handling 1000+ concurrent users using Socket.io, TypeScript, MongoDB, and scalable backend architectures.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Canvas Craft Media – Sahibzada Ajit Singh Nagar, Punjab, India",
      period: "Jan 2023 – May 2023",
      bullets: [
        "Worked on frontend development using React.js and modern JavaScript frameworks.",
        "Assisted in developing responsive UI components and integrating REST APIs.",
        "Collaborated with senior developers on debugging, testing, feature implementation, full-stack development, and Agile workflows.",
      ],
    },
  ];

  return (
    <div className="container py-5" id="experience">
      <h1 className="project-heading text-center mb-4">
        Work <strong className="purple">Experience</strong>
      </h1>
      <div className="row g-4">
        <div className="col-lg-4 col-md-12">
          <div className="experience-tabs d-flex flex-column gap-2">
            {experiences.map((experience, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedItemIndex(index)}
                className={`exp-tab-button border-0 rounded p-3 text-start w-100 ${
                  selectedItemIndex === index ? "active" : ""
                }`}
              >
                <div style={{ pointerEvents: "none" }}>
                  <strong
                    style={{
                      color: selectedItemIndex === index ? "#c770f0" : "#ffffff",
                      fontSize: "1.05em",
                      display: "block",
                    }}
                  >
                    {experience.company.split("–")[0].trim()}
                  </strong>
                  <small style={{ color: selectedItemIndex === index ? "#e2e8f0" : "#a1a1aa" }}>
                    {experience.period}
                  </small>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="col-lg-8 col-md-12 text-white p-4 rounded custom-style">
          <h2 className="purple mb-1" style={{ color: "#c770f0", fontWeight: "700" }}>
            {experiences[selectedItemIndex].title}
          </h2>
          <h5 className="text-info mb-4" style={{ color: "#38bdf8" }}>
            {experiences[selectedItemIndex].company}
          </h5>
          <ul className="experience-bullet-list">
            {experiences[selectedItemIndex].bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
