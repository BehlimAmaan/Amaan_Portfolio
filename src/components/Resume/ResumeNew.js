import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Amaan-Behlim-AI-ML-Engineer-India.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container className="resume-inner">
          <p className="eyebrow">EXPERIENCE, EDUCATION &amp; SELECTED SKILLS</p>
          <h1 className="resume-heading">The details, <em>on paper.</em></h1>
        </Container>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "30px",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex flex-column align-items-center"
          >
            <Page pageNumber={1} width={width > 786 ? 900 : width * 0.9} />
            <Page pageNumber={2} width={width > 786 ? 900 : width * 0.9} />
          </Document>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginTop: "30px",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;