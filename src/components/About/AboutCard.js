import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Karim Ehab</span>{" "}
            from <span className="purple">Cairo, Egypt</span>.
            <br />
            I am an <span className="purple">AI Engineer</span> with a strong background in software engineering, specializing in NLP, RAG systems, and autonomous AI agents.
            <br />
            I hold a B.Sc. in <span className="purple">Computer Engineering</span> (Very Good with Honors) from{" "}
            <span className="purple">Benha University – Faculty of Engineering at Shoubra</span>.
            <br />
            <br />
            Alongside developing AI systems, some activities that I am passionate about:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> AI Content Creation &amp; Technical Publishing 🎥
            </li>
            <li className="about-activity">
              <ImPointRight /> Community Mentorship &amp; AI Workshops 🎙️
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Emerging LLM &amp; Multi-Agent Research 🧠
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
