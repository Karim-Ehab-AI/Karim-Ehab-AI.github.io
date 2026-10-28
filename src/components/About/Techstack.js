import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiFastapi,
  SiMicrosoftazure,
  SiOpenai,
  SiPytorch,
  SiMlflow,
  SiPydantic,
  SiPostgresql,
  SiBentoml,
  SiNgrok,
} from "react-icons/si";

import Python from "../../Assets/TechIcons/Python.svg";
import Gemini from "../../Assets/TechIcons/Gemini.svg";
import Groq from "../../Assets/TechIcons/Groq.png";
import Langchain from "../../Assets/TechIcons/Langchain.svg";
import Qdrant from "../../Assets/TechIcons/Qdrant.svg";
import Pinecone from "../../Assets/TechIcons/Pinecone.png";
import Ragas from "../../Assets/TechIcons/Ragas.png";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Ollama from "../../Assets/TechIcons/Ollama.png";
import vLLM from "../../Assets/TechIcons/vLLM.png";

function Techstack() {
  const skills = [
    { name: "Python", icon: <img src={Python} alt="Python" /> },
    { name: "FastAPI", icon: <SiFastapi fontSize="28px" color="#009688" /> },
    { name: "Azure", icon: <SiMicrosoftazure fontSize="28px" color="#0089D6" /> },
    { name: "OpenAI", icon: <SiOpenai fontSize="28px" color="#FFFFFF" /> },
    { name: "Gemini", icon: <img src={Gemini} alt="Gemini" style={{ width: "36px", height: "36px" }} /> },
    { name: "Groq", icon: <img src={Groq} alt="Groq" style={{ width: "36px", height: "36px", objectFit: "contain" }} /> },
    { name: "LangChain", icon: <img src={Langchain} alt="LangChain" style={{ width: "36px", height: "36px" }} /> },
    { name: "Qdrant", icon: <img src={Qdrant} alt="Qdrant" style={{ width: "36px", height: "36px" }} /> },
    { name: "Pinecone", icon: <img src={Pinecone} alt="Pinecone" style={{ width: "36px", height: "36px", objectFit: "contain" }} /> },
    { name: "", icon: <img src={Ragas} alt="RAGAS" style={{ height: "26px", width: "auto", maxWidth: "85px", objectFit: "contain" }} /> },
    { name: "PyTorch", icon: <SiPytorch fontSize="28px" color="#EE4C2C" /> },
    { name: "MLflow", icon: <SiMlflow fontSize="28px" color="#0194E2" /> },
    { name: "MongoDB", icon: <img src={Mongo} alt="MongoDB" /> },
    { name: "Redis", icon: <img src={Redis} alt="Redis" /> },
    { name: "Docker", icon: <img src={Docker} alt="Docker" /> },
    { name: "Pydantic", icon: <SiPydantic fontSize="28px" color="#E92063" /> },
    { name: "PostgreSQL", icon: <SiPostgresql fontSize="28px" color="#4169E1" /> },
    { name: "Git", icon: <img src={Git} alt="Git" /> },
    { name: "Postman", icon: <img src={Postman} alt="Postman" /> },
    { name: "Ollama", icon: <img src={Ollama} alt="Ollama" style={{ width: "34px", height: "34px", objectFit: "contain" }} /> },
    { name: "BentoML", icon: <SiBentoml fontSize="28px" color="#6366F1" /> },
    { name: "vLLM", icon: <img src={vLLM} alt="vLLM" style={{ width: "24px", height: "24px", objectFit: "contain" }} /> },
    { name: "ngrok", icon: <SiNgrok fontSize="28px" color="#1F1E33" style={{ background: "#FFFFFF", borderRadius: "6px", padding: "2px" }} /> },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {skill.icon}
          {skill.name && <div className="tech-icons-text">{skill.name}</div>}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
