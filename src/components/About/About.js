import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import ExperienceTimeline from "./ExperienceTimeline";
import Education from "./Education";
import CommunityTimeline from "./CommunityTimeline";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          {/* 1. Experience */}
          <h1 className="project-heading" style={{ paddingBottom: "10px" }}>
            Professional <strong className="purple">Experience</strong>
          </h1>
          <p style={{ color: "#d1d5db", textAlign: "center", marginBottom: "15px" }}>
            My engineering internships, traineeships, and production AI development.
          </p>
          <ExperienceTimeline />

          {/* 2. Skills */}
          <h1 className="project-heading" style={{ paddingTop: "50px", paddingBottom: "10px" }}>
            Professional <strong className="purple">Skillset</strong>
          </h1>
          <p style={{ color: "#d1d5db", textAlign: "center", marginBottom: "25px" }}>
            Core technologies, AI frameworks, and vector databases I leverage in building scalable systems.
          </p>
          <Techstack />

          {/* 3. Education */}
          <h1 className="project-heading" style={{ paddingTop: "40px", paddingBottom: "10px" }}>
            Academic <strong className="purple">Education</strong>
          </h1>
          <Education />

          {/* 4. Community and Volunteer */}
          <h1 className="project-heading" style={{ paddingTop: "50px", paddingBottom: "10px" }}>
            Community &amp; <strong className="purple">Volunteering</strong>
          </h1>
          <p style={{ color: "#d1d5db", textAlign: "center", marginBottom: "15px" }}>
            Leadership roles, community workshops, and technical content creation.
          </p>
          <CommunityTimeline />

          {/* 5. Days I Code */}
          <div style={{ paddingTop: "35px" }}>
            <Github />
          </div>
        </Container>
      </Container>
    </>
  );
}

export default About;
