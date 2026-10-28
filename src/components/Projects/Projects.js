import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import candidateSearchImg from "../../Assets/Projects/candidate-search.png";
import firstAidImg from "../../Assets/Projects/first-aid.png";

function Projects() {
  const candidateSearchPoints = [
    "Designed and implemented explainable hybrid retrieval with Qdrant, combining semantic and lexical search with recruiter metadata filters and weighted candidate scoring across skills, experience, and education.",
    "Architected a Dockerized microservices system with vendor-agnostic AI interfaces (Factory Design Pattern), integrating structured CV parsing with LangChain, Gemini API, and Pydantic.",
    "Built a custom evaluation benchmark of 150 CVs & 30 JDs using LLM-assisted arena-style ranking; achieved 95.56% Precision@5 and 91.10% NDCG@10 with Redis caching to eliminate redundant embedding and inference calls (3–7s search latency).",
  ];

  const firstAidPoints = [
    "Built a bilingual First-Aid RAG assistant with Qdrant hybrid dense/sparse retrieval fused via Reciprocal Rank Fusion (RRF), metadata filtering, and Groq Whisper voice query support in both English and Arabic.",
    "Engineered and deployed independent cloud microservices separating GPU-intensive inference workloads for optimal latency, fault isolation, and scalability.",
    "Evaluated on 25 ground-truth queries, achieving ~98% Precision@3, 100% Recall@3, and 96% MRR. Ragas evaluation demonstrated 98% Answer Relevancy and 100% Faithfulness with full test validation using Pytest.",
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the featured AI and RAG projects I've built recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={candidateSearchImg}
              isBlog={false}
              title="AI-Powered Candidate Search & Ranking System"
              points={candidateSearchPoints}
              demoLink="https://youtu.be/EpmqGmgQxUQ?si=5Xol4pNsQzBI-9q5"
              isYoutube={true}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={firstAidImg}
              isBlog={false}
              title="AI First-Aid Assistant"
              points={firstAidPoints}
              ghLink="https://github.com/Karim-Ehab-AI/AI-First-Aid-Assistant"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
