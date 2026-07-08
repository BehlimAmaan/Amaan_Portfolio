import React from "react";
import { Col, Row } from "react-bootstrap";

import VSCode from "../../Assets/TechIcons/vscode.svg";
import Jupyter from "../../Assets/TechIcons/jupyter.webp";
import Streamlit from "../../Assets/TechIcons/streamlit.png";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Github from "../../Assets/TechIcons/github.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Azure from "../../Assets/TechIcons/azure.svg";
import PowerBI from "../../Assets/TechIcons/PowerBI.png";

const tools = [
  {
    icon: VSCode,
    name: "VS Code",
  },
  {
    icon: Jupyter,
    name: "Jupyter Notebook",
  },
  {
    icon: Streamlit,
    name: "Streamlit",
  },
  {
    icon: Docker,
    name: "Docker",
  },
  {
    icon: Git,
    name: "Git",
  },
  {
    icon: Github,
    name: "GitHub",
  },
  {
    icon: AWS,
    name: "AWS",
  },
  {
    icon: Azure,
    name: "Microsoft Azure",
  },
  {
    icon: PowerBI,
    name: "Power BI",
  },
];

function Toolstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
      }}
    >
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <img
            src={tool.icon}
            alt={tool.name}
            className="tech-icon-images"
          />
          <div className="tech-icons-text">{tool.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;