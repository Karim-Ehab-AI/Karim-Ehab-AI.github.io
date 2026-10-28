import React from "react";
import { Row, Col } from "react-bootstrap";
import shoubraLogo from "../../Assets/shoubra-logo.jpg";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBookOpen, FaAward } from "react-icons/fa";

const coursework = [
  "Software Engineering",
  "Object-Oriented Programming (OOP)",
  "Data Structures & Algorithms",
  "Operating Systems (OS)",
  "Databases",
  "System Analysis & Design",
  "Artificial Intelligence (AI)",
  "Machine Learning (ML)",
  "Deep Learning (DL)",
  "Computer Vision",
  "Large Language Models (LLMs)",
];

function Education() {
  return (
    <div className="education-card">
      <Row className="align-items-center">
        <Col md={3} className="education-logo-container">
          <img
            src={shoubraLogo}
            alt="Faculty of Engineering at Shoubra - Benha University"
            className="education-logo-img img-fluid"
          />
        </Col>

        <Col md={9} style={{ paddingLeft: "25px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
            <FaGraduationCap style={{ fontSize: "1.6em", color: "#87CEEB" }} />
            <h3 style={{ fontSize: "1.35em", fontWeight: "700", color: "#ffffff", margin: 0 }}>
              Bachelor of Science in Computer Engineering
            </h3>
          </div>

          <h5 style={{ color: "#87CEEB", fontWeight: "600", marginBottom: "12px", fontSize: "1.05em" }}>
            Benha University – Faculty of Engineering at Shoubra
          </h5>

          <div className="timeline-meta" style={{ marginBottom: "14px" }}>
            <span className="timeline-badge">
              <FaCalendarAlt style={{ fontSize: "0.85em" }} /> 2022 – 2027
            </span>
            <span className="timeline-badge">
              <FaMapMarkerAlt style={{ fontSize: "0.85em" }} /> Cairo, Egypt
            </span>
            <span
              className="timeline-badge"
              style={{
                background: "rgba(34, 197, 94, 0.15)",
                borderColor: "rgba(34, 197, 94, 0.4)",
                color: "#86efac",
              }}
            >
              <FaAward style={{ fontSize: "0.85em" }} /> Very Good with Honors
            </span>
          </div>

          <p style={{ color: "#d1d5db", fontSize: "0.93em", lineHeight: "1.6", marginBottom: "10px" }}>
            Comprehensive academic study covering core foundations in Software Engineering and Computer Science, with advanced specialization in Artificial Intelligence and Machine Learning systems:
          </p>

          <div className="education-course-tags">
            {coursework.map((course, idx) => (
              <span key={idx} className="education-course-tag">
                <FaBookOpen style={{ fontSize: "0.75em", color: "#87CEEB" }} /> {course}
              </span>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Education;
