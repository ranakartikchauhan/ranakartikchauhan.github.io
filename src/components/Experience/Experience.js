import React from "react";
import "./experince.css"

function Experience() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    const experiences = [
        {
            title: "Associate Delivery Level 3",
            company: "SmartData Enterprises Inc. – Dehradun, IN",
            period: "Jan 2026 – Present",
            description: `
        • Working on scalable healthcare sector applications with a focus on backend architecture, AI workflows, and enterprise-grade system development.
        • Developed AI-powered workflows for report generation, audio report processing, automated summarization, and intelligent admin dashboards.
        • Built scalable backend APIs and optimized data-processing workflows, improving system efficiency and reducing manual operations.
        • Contributed to optimization initiatives that improved API response performance and reduced backend processing overhead by approximately 35%.
        • Collaborated with cross-functional teams using Agile methodologies and modern development workflows.
      `,
        },
        {
            title: "Technology Senior Executive",
            company: "Pearl Organisation – Dehradun, IN",
            period: "May 2025 – Jan 2026",
            description: `
        • Managed and delivered 20+ projects including eCommerce platforms, vehicle booking systems, tour booking applications, and business management solutions.
        • Handled multiple client projects simultaneously while ensuring timely delivery, production stability, and business-critical workflow support.
        • Developed scalable web applications and backend services, improving frontend responsiveness through optimized rendering and reusable UI architecture.
        • Integrated secure payment gateway systems and scalable backend workflows for high-traffic applications while supporting debugging, testing, deployment, and production operations.
      `,
        },
        {
            title: "Software Developer",
            company: "Codementees – Bengaluru, IN",
            period: "Sep 2024 – May 2025",
            description: `
        • Developed a Full-Stack Mentorship Platform using the MERN stack, connecting hundreds of mentees with experienced tech mentors.
        • Built scalable backend APIs supporting authentication, real-time communication, and content management, including Socket.io messaging that increased engagement by 20%.
        • Optimized MongoDB queries, aggregation pipelines, and indexing strategies, improving database performance by 40% and reducing API response times significantly.
        • Improved frontend maintainability by building reusable React components, developing SEO-friendly pages, and applying Next.js server-side rendering best practices.
      `,
        },
        {
            title: "MERN Stack Developer",
            company: "Quitepaper – Bikaner, IN",
            period: "Jul 2023 – Aug 2024",
            description: `
        • Designed and developed a scalable Library Management System with seat booking and CRM functionality used by multiple organizations.
        • Engineered backend workflows and optimized query execution to improve booking efficiency and reduce system latency.
        • Built an automated seat allocation algorithm reducing booking conflicts by 30% and implemented real-time notifications to improve platform responsiveness.
        • Integrated secure payment gateway systems capable of handling 1000+ concurrent users using Socket.io, TypeScript, MongoDB, and scalable backend architectures.
      `,
        },
        {
            title: "Software Engineer Intern",
            company: "Canvas Craft Media – SAS Nagar, Punjab, IN",
            period: "Jan 2023 – May 2023",
            description: `
        • Worked on frontend development using React.js and modern JavaScript frameworks.
        • Assisted in developing responsive UI components and integrating REST APIs.
        • Collaborated with senior developers on debugging, testing, feature implementation, full-stack development, and Agile workflows.
      `,
        },
    ];

    return (
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-4 col-md-12 border-start border-secondary">
                    <div class="list-group">
                        {experiences.map((experience, index) => (
                            <a
                                key={index}
                                role="button"
                                onClick={() => setSelectedItemIndex(index)}
                                class={`list-group-item list-group-item-action border-0 ${selectedItemIndex === index
                                    ? "active bg-dark text-light border-start border-warning"
                                    : "bg-transparent text-white"
                                    }`}
                                style={{
                                    borderLeftWidth: selectedItemIndex === index ? "4px" : "0",
                                }}
                            >
                                {experience.period}
                            </a>
                        ))}
                    </div>
                </div>

                <div class="col-lg-8 col-md-12 bg-dark text-white p-4 rounded custom-style" >
                    <h1 class="text-warning mb-2">
                        {experiences[selectedItemIndex].title}
                    </h1>
                    <h2 class="text-info mb-3">
                        {experiences[selectedItemIndex].company}
                    </h2>
                    <p class="text-white" style={{ whiteSpace: "pre-line" }}>
                        {experiences[selectedItemIndex].description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Experience;
