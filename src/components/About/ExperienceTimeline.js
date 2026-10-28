import React from "react";
import {
  FaBriefcase,
  FaRobot,
  FaLaptopCode,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ExperienceTimeline() {
  const experiences = [
    {
      role: "AI Engineer Intern",
      company: "EVA Cosmetics",
      date: "Jul 2026 – Sep 2026",
      location: "Cairo, Egypt",
      icon: <FaRobot />,
      points: [
        "Top 20 finalist among 1,500+ participants in the EVA AI Hackathon, earning an AI Engineering internship.",
        "Developed an explainable AI-powered candidate screening and ranking system, cutting screening time from days to seconds with transparent, traceable score breakdowns.",
        "Achieved 95.56% Precision@5 and 91.10% NDCG@10 on 150 CVs and 30 JDs, with 3–7s search latency.",
      ],
    },
    {
      role: "NLP Trainee",
      company: "National Telecommunications Institute (NTI)",
      date: "Jul 2025 – Aug 2025",
      location: "Cairo, Egypt",
      icon: <FaLaptopCode />,
      points: [
        "Trained in NLP, LLMs, RAG, and Agentic AI workflows.",
        "Built sentiment analysis, OCR, translation, and chatbot applications using Hugging Face, crewAI, and LangChain.",
      ],
    },
    {
      role: "Microsoft Machine Learning Engineer Trainee",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      date: "Apr 2024 – Oct 2024",
      location: "Cairo, Egypt",
      icon: <FaBriefcase />,
      points: [
        "Led a 5-member team building a respiratory disease classifier across 6 categories using 26,000+ chest X-rays, achieving 93% accuracy and ranking Top 5 nationally.",
        "Received the Leadership Excellence award as a top DEPI team leader.",
        "Trained in Machine Learning, Deep Learning, NLP, Computer Vision, Azure, and MLOps.",
      ],
    },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {experiences.map((exp, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-dot">{exp.icon}</div>
          <div className="timeline-card">
            <div className="timeline-header-row">
              <div>
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-company">{exp.company}</div>
              </div>
              <div className="timeline-meta">
                <span className="timeline-badge">
                  <FaCalendarAlt style={{ fontSize: "0.85em" }} /> {exp.date}
                </span>
                <span className="timeline-badge">
                  <FaMapMarkerAlt style={{ fontSize: "0.85em" }} /> {exp.location}
                </span>
              </div>
            </div>

            <ul className="timeline-desc">
              {exp.points.map((point, pIdx) => (
                <li key={pIdx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceTimeline;
