import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiWindows, SiLinux } from "react-icons/si";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import postman from "../../Assets/TechIcons/Postman.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux fontSize={"28px"} color="#FCC624" />
        <div className="tech-icons-text">Linux / WSL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows fontSize={"28px"} color="#0078D6" />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
