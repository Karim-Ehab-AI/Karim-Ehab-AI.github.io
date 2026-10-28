import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div style={{ padding: "16px 16px 0 16px", textAlign: "center" }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={props.title}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "280px",
            objectFit: "contain",
            borderRadius: "14px",
            border: "1px solid rgba(199, 112, 240, 0.3)",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.45)",
          }}
        />
      </div>

      <Card.Body style={{ display: "flex", flexDirection: "column", textAlign: "left", padding: "20px 24px" }}>
        <Card.Title
          style={{
            fontWeight: "700",
            fontSize: "1.3em",
            marginBottom: "18px",
            marginTop: "6px",
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          {props.title}
        </Card.Title>

        {props.points && props.points.length > 0 ? (
          <ul
            style={{
              color: "#d1d5db",
              fontSize: "0.92em",
              lineHeight: "1.65",
              paddingLeft: "18px",
              marginBottom: "20px",
              flexGrow: 1,
            }}
          >
            {props.points.map((point, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                {point}
              </li>
            ))}
          </ul>
        ) : (
          <Card.Text style={{ textAlign: "justify", flexGrow: 1 }}>
            {props.description}
          </Card.Text>
        )}

        <div style={{ marginTop: "auto", paddingTop: "10px" }}>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {"GitHub"}
            </Button>
          )}

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: props.ghLink ? "10px" : "0" }}
            >
              {props.isYoutube ? <AiFillYoutube style={{ fontSize: "1.2em" }} /> : <CgWebsite />} &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
