import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am an <b className="purple">AI Engineer</b> driven by building scalable, evaluation-driven, and reliable AI solutions for complex real-world challenges.
              <br />
              <br />
              I specialize in
              <i>
                <b className="purple">
                  {" "}
                  Python, FastAPI, RAG Systems, and AI Agents{" "}
                </b>
              </i>
              — with deep hands-on expertise across both AI architecture and software engineering.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Advanced Hybrid Retrieval, Multi-Agent Workflows,{" "}
                </b>
              </i>
              and production-ready GenAI applications.
              <br />
              <br />
              I am a
              <b className="purple"> Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103) </b>
              and actively share practical AI engineering insights as a tech speaker, community mentor, and YouTube creator.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Karim Ehab"
                style={{
                  borderRadius: "50%",
                  border: "4px solid #c770f0",
                  boxShadow: "0 0 30px rgba(199, 112, 240, 0.45)",
                  maxWidth: "280px",
                  width: "100%",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;