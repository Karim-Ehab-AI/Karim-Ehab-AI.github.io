import React from "react";
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

function CommunityTimeline() {
  const activities = [
    {
      role: "Head of AI",
      company: "Google Developer Group on Campus (GDG)",
      date: "Sep 2025 – Aug 2026",
      location: "Benha University",
      icon: <FaUsers />,
      points: [
        "Led AI workshops and practical projects for 30+ core members across ML, NLP, LLMs, and Generative AI workflows.",
        "Mentored aspiring developers and coordinated technical hands-on sessions on modern AI architectures.",
      ],
    },
    {
      role: "AI Content Creator",
      company: "YouTube (@Karim-Ehab-AI)",
      date: "Dec 2025 – Present",
      location: "Online",
      icon: <AiFillYoutube />,
      points: [
        "Publishing in-depth technical video content covering AI, Machine Learning, Deep Learning, LLMs, RAG architectures, and vector databases.",
        "Sharing practical tutorials to empower the developer community in building production-ready AI applications.",
      ],
    },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {activities.map((act, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-dot">{act.icon}</div>
          <div className="timeline-card">
            <div className="timeline-header-row">
              <div>
                <div className="timeline-role">{act.role}</div>
                <div className="timeline-company">{act.company}</div>
              </div>
              <div className="timeline-meta">
                <span className="timeline-badge">
                  <FaCalendarAlt style={{ fontSize: "0.85em" }} /> {act.date}
                </span>
                <span className="timeline-badge">
                  <FaMapMarkerAlt style={{ fontSize: "0.85em" }} /> {act.location}
                </span>
              </div>
            </div>

            <ul className="timeline-desc">
              {act.points.map((point, pIdx) => (
                <li key={pIdx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommunityTimeline;

