import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCards from "./CertificateCards";
import Particle from "../Particle";
import { SiMicrosoftazure, SiGoogle } from "react-icons/si";
import { AiOutlineTrophy } from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { FaBriefcase, FaMedal } from "react-icons/fa";

// Section 1 Images
import ai103Img from "../../Assets/Certificates/ai-103.png";
import evaInternImg from "../../Assets/Certificates/eva-intern.png";
import evaHackathonImg from "../../Assets/Certificates/eva-hackathon-top20.jpg";
import orangeHackathonImg from "../../Assets/Certificates/orange-hackathon-top5.png";
import depiVoucherImg from "../../Assets/Certificates/depi-top5-voucher.png";
import depiTeamleaderImg from "../../Assets/Certificates/depi-teamleader.png";
import depiHonorShieldImg from "../../Assets/Certificates/depi-honor-shield.jpg";
import depiCompletionImg from "../../Assets/Certificates/depi-completion.png";
import depiBusinessEnglishImg from "../../Assets/Certificates/depi-business-english.png";
import deeplearningRagImg from "../../Assets/Certificates/deeplearning-rag.png";
import mlopsPractitionerImg from "../../Assets/Certificates/mlops-practitioner.png";
import ntiNlpImg from "../../Assets/Certificates/nti-nlp.png";

// Section 2 Images - MS Learn Paths
import msLearnGenAiImg from "../../Assets/Certificates/ms-learn-genai.png";
import msLearnAgentsImg from "../../Assets/Certificates/ms-learn-agents.png";
import msLearnNlpImg from "../../Assets/Certificates/ms-learn-nlp.png";
import msLearnCvImg from "../../Assets/Certificates/ms-learn-cv.png";

// Section 2 Images - Programs & Specialized
import gdgInstructorImg from "../../Assets/Certificates/gdg-instructor.png";
import zewailCityImg from "../../Assets/Certificates/zewail-city.png";
import introLlmsImg from "../../Assets/Certificates/intro-llms.png";
import pineconeVdbImg from "../../Assets/Certificates/pinecone-vdb.png";
import mlAlgorithms365Img from "../../Assets/Certificates/365-ml-algorithms.png";
import mlPreprocessing365Img from "../../Assets/Certificates/365-ml-preprocessing.png";

// Section 3 Images
import datacampSupervisedImg from "../../Assets/Certificates/datacamp-supervised-learning.png";
import datacampTreeImg from "../../Assets/Certificates/datacamp-tree-models.png";
import datacampStatsImg from "../../Assets/Certificates/datacamp-statistics.png";
import oopPythonImg from "../../Assets/Certificates/oop-python.png";
import databaseFundamentalsImg from "../../Assets/Certificates/database-fundamentals.png";
import introGitImg from "../../Assets/Certificates/intro-git.png";
import intermediateGitImg from "../../Assets/Certificates/intermediate-git.png";
import containerizationImg from "../../Assets/Certificates/containerization.png";
import cloudComputingImg from "../../Assets/Certificates/cloud-computing.png";

function Certificates() {
  const [activeFilter, setActiveFilter] = useState("all");

  const section1Featured = [
    {
      img: ai103Img,
      title: "Azure AI Apps and Agents Developer Associate (AI-103)",
      issuer: "Microsoft",
      date: "Oct 2026",
      link: "https://learn.microsoft.com/en-us/users/karimehab-6229/credentials/fd5c204ef53b9e9e",
      icon: <SiMicrosoftazure color="#0089D6" />,
      description:
        "Official Microsoft certification validating expertise in designing and implementing AI apps and agentic workflows using Azure AI Foundry, Azure AI Search, Document Intelligence, and OpenAI / LLM frameworks.",
    },
    {
      img: evaInternImg,
      title: "AI Engineering Internship",
      issuer: "EVA Cosmetics",
      date: "Jul 2026 – Sep 2026",
      icon: <FaBriefcase color="#c770f0" />,
      description:
        "Completed AI Engineering internship building an explainable candidate search and ranking ATS platform, reducing screening time from days to seconds with 95.56% Precision@5.",
    },
    {
      img: evaHackathonImg,
      title: "Top 20 Finalist — EVA AI Hackathon",
      issuer: "EVA Cosmetics",
      icon: <AiOutlineTrophy color="#F59E0B" />,
      description:
        "Top 20 finalist among 1,500+ participants nationwide in the EVA AI Hackathon, earning an AI Engineering internship at EVA Cosmetics.",
    },
    {
      img: orangeHackathonImg,
      title: "Top 5 Winner — Orange AI Hackathon",
      issuer: "Orange Egypt",
      icon: <AiOutlineTrophy color="#F59E0B" />,
      description:
        "Ranked Top 5 (4th Place) among 35+ competing teams (with up to 5 members each) as a solo developer with the AI First-Aid Assistant project.",
    },
    {
      img: depiVoucherImg,
      title: "Top 5 National Winners — Microsoft Exam Voucher",
      issuer: "DEPI & Microsoft",
      icon: <AiOutlineTrophy color="#F59E0B" />,
      description:
        "Awarded Microsoft Exam Voucher for leading a 5-member team that achieved Top 5 ranking nationally across Egypt in the Machine Learning track.",
    },
    {
      img: depiTeamleaderImg,
      title: "Leadership Excellence — Outstanding Team Leader",
      issuer: "Digital Egypt Pioneers Initiative (DEPI)",
      icon: <FaMedal color="#F59E0B" />,
      description:
        "Awarded Leadership Excellence after being selected as one of the top outstanding Team Leaders throughout the entire 6-month DEPI training program.",
    },
    {
      img: depiHonorShieldImg,
      title: "Honor Shield & Award of Excellence",
      issuer: "Global Knowledge",
      icon: <AiOutlineTrophy color="#F59E0B" />,
      description:
        "Award of honor for excellence and leading our team to achieve top national ranking across DEPI Machine Learning track teams.",
    },
    {
      img: depiCompletionImg,
      title: "Machine Learning Engineer Track Completion",
      issuer: "DEPI — Ministry of Communications (MCIT)",
      date: "Apr 2024 – Oct 2024",
      icon: <TbCertificate color="#c770f0" />,
      description:
        "Graduated from the Digital Egypt Pioneers Initiative (DEPI) Machine Learning track after 6 months of comprehensive training in ML, Deep Learning, NLP, CV, and Azure.",
    },
    {
      img: depiBusinessEnglishImg,
      title: "Business English Track Certificate",
      issuer: "DEPI & Berlitz",
      icon: <TbCertificate color="#c770f0" />,
      description:
        "Completed professional Business English communication track as part of the DEPI scholarship program.",
    },
    {
      img: deeplearningRagImg,
      title: "Retrieval-Augmented Generation (RAG)",
      issuer: "DeepLearning.AI",
      date: "May 2026",
      link: "https://www.coursera.org/account/accomplishments/verify/QJSVX0QD35VT",
      icon: <TbCertificate color="#c770f0" />,
      description:
        "Hands-on implementation of vector databases, hybrid dense/sparse retrieval, query translation, and automated evaluation using RAGAS.",
    },
    {
      img: mlopsPractitionerImg,
      title: "MLOps Practitioner Certificate",
      issuer: "MLOps MENA",
      date: "Oct 2026",
      link: "https://mlopsmena.com/tools/verify-certificate/?code=MLOPS-01-2026-00084",
      icon: <TbCertificate color="#0089D6" />,
      description:
        "Practical implementation of machine learning operations, model deployment, monitoring pipelines, and CI/CD for AI systems.",
    },
    {
      img: ntiNlpImg,
      title: "NLP & Generative AI Summer Training",
      issuer: "National Telecommunications Institute (NTI)",
      date: "Jul 2025",
      icon: <TbCertificate color="#c770f0" />,
      description:
        "Intensive training in Natural Language Processing, LLMs, RAG, and Agentic AI with hands-on applications using Hugging Face, crewAI, and LangChain.",
    },
  ];

  const section2Specialized = [
    {
      img: msLearnGenAiImg,
      title: "Develop Generative AI Apps in Azure",
      issuer: "Microsoft Learn",
      link: "https://learn.microsoft.com/en-us/users/karimehab-6229/achievements/qlxlckge",
      icon: <SiMicrosoftazure color="#0089D6" />,
    },
    {
      img: msLearnAgentsImg,
      title: "Develop AI Agents on Azure",
      issuer: "Microsoft Learn",
      link: "https://learn.microsoft.com/en-us/users/karimehab-6229/achievements/y4uuq7br",
      icon: <SiMicrosoftazure color="#0089D6" />,
    },
    {
      img: msLearnNlpImg,
      title: "Develop Natural Language Solutions in Azure",
      issuer: "Microsoft Learn",
      link: "https://learn.microsoft.com/en-us/users/karimehab-6229/achievements/h2g9gjx8",
      icon: <SiMicrosoftazure color="#0089D6" />,
    },
    {
      img: msLearnCvImg,
      title: "Develop Computer Vision Solutions with Microsoft Foundry",
      issuer: "Microsoft Learn",
      link: "https://learn.microsoft.com/en-us/users/karimehab-6229/achievements/u7lvez73",
      icon: <SiMicrosoftazure color="#0089D6" />,
    },
    {
      img: gdgInstructorImg,
      title: "Head of AI & Technical Instructor",
      issuer: "Google Developer Groups (Benha University)",
      date: "2025 – 2026",
      icon: <SiGoogle color="#4285F4" />,
    },
    {
      img: zewailCityImg,
      title: "Zewail City Technical Training Program",
      issuer: "Zewail City of Science & Technology",
      link: "https://www.checkcertificates.com/certifications/?csrfmiddlewaretoken=2qupb00ZtjUK04xpHIS61hTDAPRLldIOWIsgN60xUePuGvkLz6EyYrxE05zQLxNs&peko=ZIN0482",
      icon: <TbCertificate color="#10B981" />,
    },
    {
      img: introLlmsImg,
      title: "Introduction to Large Language Models (LLMs)",
      issuer: "365 Data Science",
      date: "Nov 2025",
      link: "https://learn.365datascience.com/certificates/CC-AF6585B1BB/",
      icon: <TbCertificate color="#6366F1" />,
    },
    {
      img: pineconeVdbImg,
      title: "Vector Databases with Pinecone",
      issuer: "DataCamp",
      date: "May 2026",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/10fa7c3cab1cbe3956e040654e274775228f6103",
      icon: <TbCertificate color="#0089D6" />,
    },
    {
      img: mlAlgorithms365Img,
      title: "Machine Learning Algorithms",
      issuer: "365 Data Science",
      date: "Nov 2024",
      link: "https://learn.365datascience.com/certificates/CC-3DECEA8270/",
      icon: <TbCertificate color="#F59E0B" />,
    },
    {
      img: mlPreprocessing365Img,
      title: "Machine Learning Preprocessing",
      issuer: "365 Data Science",
      date: "Nov 2024",
      link: "https://learn.365datascience.com/certificates/CC-89FD015503/",
      icon: <TbCertificate color="#F59E0B" />,
    },
  ];

  const section3Mini = [
    {
      img: datacampSupervisedImg,
      title: "Supervised Learning with scikit-learn",
      issuer: "DataCamp",
      date: "Dec 2024",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/f9c934df44dcb677686da63a04cf8be25d7e991d",
      icon: <TbCertificate color="#03EF62" />,
    },
    {
      img: datacampTreeImg,
      title: "Tree-Based Models in Python",
      issuer: "DataCamp",
      date: "Feb 2025",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/ea2cc026d7f17507ef1c427e926b6523c9c14910",
      icon: <TbCertificate color="#03EF62" />,
    },
    {
      img: datacampStatsImg,
      title: "Introduction to Statistics in Python",
      issuer: "DataCamp",
      date: "Dec 2024",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/7b866eb026655105779b1dfd5bd7fae43607165a",
      icon: <TbCertificate color="#03EF62" />,
    },
    {
      img: oopPythonImg,
      title: "Object-Oriented Programming in Python",
      issuer: "DataCamp",
      date: "Dec 2025",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/13ecac4991a19f90af7552368ea07704e3c9b222",
      icon: <TbCertificate color="#03EF62" />,
    },
    {
      img: databaseFundamentalsImg,
      title: "Fundamentals of Databases",
      issuer: "Mahara-Tech",
      link: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?code=4VT7Dqrks7&qrcode=1",
      icon: <TbCertificate color="#0089D6" />,
    },
    {
      img: introGitImg,
      title: "Introduction to Git",
      issuer: "DataCamp",
      date: "Jun 2026",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/10e00a5009cca74d899711d3ddab37440b03a248?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa",
      icon: <TbCertificate color="#F05032" />,
    },
    {
      img: intermediateGitImg,
      title: "Intermediate Git",
      issuer: "DataCamp",
      date: "Jun 2026",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/276f2346ff57432a3aef8496dbe269642a335867",
      icon: <TbCertificate color="#F05032" />,
    },
    {
      img: containerizationImg,
      title: "Containerization & Virtualization",
      issuer: "DataCamp",
      date: "Jul 2026",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/ae051f460b8557427c68712ea0396e505d309742?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa",
      icon: <TbCertificate color="#0089D6" />,
    },
    {
      img: cloudComputingImg,
      title: "Understanding Cloud Computing",
      issuer: "DataCamp",
      date: "Feb 2025",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/96b399e28d32e2a1f017ad7781ff7c241ab2ccee",
      icon: <TbCertificate color="#0089D6" />,
    },
  ];

  const showSection1 = activeFilter === "all" || activeFilter === "featured";
  const showSection2 = activeFilter === "all" || activeFilter === "specialized";
  const showSection3 = activeFilter === "all" || activeFilter === "mini";

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Certifications &amp; <strong className="purple">Achievements</strong>
        </h1>
        <p style={{ color: "white" }}>
          Verified credentials, competition awards, and specialized technical milestones.
        </p>

        {/* Filter Navigation Buttons */}
        <div className="cert-filter-container">
          <button
            className={`cert-filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Credentials ({section1Featured.length + section2Specialized.length + section3Mini.length})
          </button>
          <button
            className={`cert-filter-btn ${activeFilter === "featured" ? "active" : ""}`}
            onClick={() => setActiveFilter("featured")}
          >
            🏆 Featured Honors &amp; Awards ({section1Featured.length})
          </button>
          <button
            className={`cert-filter-btn ${activeFilter === "specialized" ? "active" : ""}`}
            onClick={() => setActiveFilter("specialized")}
          >
            🧠 Specialized AI &amp; Learning Paths ({section2Specialized.length})
          </button>
          <button
            className={`cert-filter-btn ${activeFilter === "mini" ? "active" : ""}`}
            onClick={() => setActiveFilter("mini")}
          >
            📚 Foundational &amp; Mini-Courses ({section3Mini.length})
          </button>
        </div>

        {/* Section 1: Featured Honors */}
        {showSection1 && (
          <div style={{ marginBottom: "50px" }}>
            <div className="cert-section-header">
              <AiOutlineTrophy style={{ color: "#F59E0B" }} />
              <span>Featured Honors &amp; Top Achievements</span>
            </div>
            <Row style={{ justifyContent: "center" }}>
              {section1Featured.map((cert, index) => (
                <Col md={6} lg={4} key={index} style={{ marginBottom: "25px" }}>
                  <CertificateCards
                    img={cert.img}
                    title={cert.title}
                    issuer={cert.issuer}
                    date={cert.date}
                    description={cert.description}
                    link={cert.link}
                    icon={cert.icon}
                  />
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* Section 2: Specialized AI & Programs */}
        {showSection2 && (
          <div style={{ marginBottom: "50px" }}>
            <div className="cert-section-header">
              <TbCertificate style={{ color: "#c770f0" }} />
              <span>Specialized AI, Azure Learning Paths &amp; Programs</span>
            </div>
            <Row style={{ justifyContent: "center" }}>
              {section2Specialized.map((cert, index) => (
                <Col md={6} lg={4} key={index} style={{ marginBottom: "25px" }}>
                  <CertificateCards
                    img={cert.img}
                    title={cert.title}
                    issuer={cert.issuer}
                    date={cert.date}
                    description={cert.description}
                    link={cert.link}
                    icon={cert.icon}
                  />
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* Section 3: Mini-Courses */}
        {showSection3 && (
          <div style={{ marginBottom: "50px" }}>
            <div className="cert-section-header">
              <TbCertificate style={{ color: "#86efac" }} />
              <span>Foundational &amp; Mini-Courses</span>
            </div>
            <Row style={{ justifyContent: "center" }}>
              {section3Mini.map((cert, index) => (
                <Col md={6} lg={4} key={index} style={{ marginBottom: "25px" }}>
                  <CertificateCards
                    img={cert.img}
                    title={cert.title}
                    issuer={cert.issuer}
                    date={cert.date}
                    description={cert.description}
                    link={cert.link}
                    icon={cert.icon}
                  />
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Certificates;