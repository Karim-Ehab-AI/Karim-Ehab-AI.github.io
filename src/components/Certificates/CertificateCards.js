import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FiExternalLink, FiZoomIn } from "react-icons/fi";
import { TbCertificate } from "react-icons/tb";

function CertificateCards({ img, title, issuer, date, description, link, icon }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className="certificate-card">
        {img && (
          <div className="certificate-img-container" onClick={() => setShowModal(true)}>
            <img src={img} alt={title} className="certificate-img" />
          </div>
        )}

        <Card.Body style={{ padding: "18px 20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "8px" }}>
            <div style={{ fontSize: "1.4em", color: "#c770f0", marginTop: "2px", flexShrink: 0 }}>
              {icon || <TbCertificate />}
            </div>
            <div style={{ flexGrow: 1 }}>
              <Card.Title style={{ fontSize: "1.1em", fontWeight: "700", color: "#ffffff", margin: 0, lineHeight: "1.4" }}>
                {title}
              </Card.Title>
              <div style={{ color: "#c770f0", fontSize: "0.88em", marginTop: "4px" }}>
                <strong style={{ color: "#e3b1f7" }}>{issuer}</strong> {date && `• ${date}`}
              </div>
            </div>
          </div>

          {description && (
            <Card.Text
              style={{
                color: "#d1d5db",
                fontSize: "0.9em",
                lineHeight: "1.6",
                marginTop: "10px",
                marginBottom: "12px",
                flexGrow: 1,
              }}
            >
              {description}
            </Card.Text>
          )}

          <div style={{ marginTop: "auto", paddingTop: "12px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {img && (
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => setShowModal(true)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.85em",
                  borderColor: "rgba(199, 112, 240, 0.4)",
                  color: "#e3b1f7",
                  borderRadius: "20px",
                  padding: "4px 12px",
                }}
              >
                <FiZoomIn /> Preview
              </Button>
            )}

            {link && (
              <Button
                variant="primary"
                size="sm"
                href={link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.85em",
                  borderRadius: "20px",
                  padding: "4px 14px",
                }}
              >
                <FiExternalLink /> Verify
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      {/* Lightbox Modal */}
      {img && (
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size="lg"
          centered
          contentClassName="certificate-modal-content"
          style={{ backdropFilter: "blur(5px)" }}
        >
          <Modal.Header
            closeButton
            closeVariant="white"
            style={{
              background: "#0a0416",
              borderBottom: "1px solid rgba(199, 112, 240, 0.25)",
              color: "#ffffff",
            }}
          >
            <Modal.Title style={{ fontSize: "1.1em", fontWeight: "700" }}>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ background: "#000000", textAlign: "center", padding: "15px" }}>
            <img
              src={img}
              alt={title}
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0 0 25px rgba(0,0,0,0.8)",
              }}
            />
          </Modal.Body>
          {link && (
            <Modal.Footer
              style={{
                background: "#0a0416",
                borderTop: "1px solid rgba(199, 112, 240, 0.25)",
                justifyContent: "space-between",
              }}
            >
              <span style={{ color: "#c770f0", fontSize: "0.9em" }}>{issuer}</span>
              <Button
                variant="primary"
                size="sm"
                href={link}
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                <FiExternalLink /> Verify Official Credential
              </Button>
            </Modal.Footer>
          )}
        </Modal>
      )}
    </>
  );
}

export default CertificateCards;