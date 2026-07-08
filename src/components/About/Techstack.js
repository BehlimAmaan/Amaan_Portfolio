import React from "react";
import { Col, Row } from "react-bootstrap";

import Python from "../../Assets/TechIcons/Python.svg";
import TensorFlow from "../../Assets/TechIcons/tensorflow.png";
import Scikit from "../../Assets/TechIcons/scikitlearn.webp";
import HuggingFace from "../../Assets/TechIcons/huggingface.png";
import LangChain from "../../Assets/TechIcons/LangChain.png"; 
import Numpy from "../../Assets/TechIcons/numpy.png";
import Pandas from "../../Assets/TechIcons/pandas.png";

import MySQL from "../../Assets/TechIcons/SQL.svg";
import PostgreSQL from "../../Assets/TechIcons/postgresql.jpg";
import SQLServer from "../../Assets/TechIcons/SQLServer.webp"; 

import PowerBI from "../../Assets/TechIcons/PowerBI.png"; 

import AWS from "../../Assets/TechIcons/AWS.svg";
import Azure from "../../Assets/TechIcons/azure.svg"; 

import Git from "../../Assets/TechIcons/Git.svg";
import Github from "../../Assets/TechIcons/github.svg";

import Docker from "../../Assets/TechIcons/Docker.svg";
import Streamlit from "../../Assets/TechIcons/streamlit.png";
import Jupyter from "../../Assets/TechIcons/jupyter.webp";
import VSCode from "../../Assets/TechIcons/vscode.svg";

const techStack = [
  { icon: Python, name: "Python" },
  { icon: Numpy, name: "NumPy" },
  { icon: Pandas, name: "Pandas" },
  { icon: TensorFlow, name: "TensorFlow" },
  { icon: Scikit, name: "Scikit-learn" },
  { icon: HuggingFace, name: "Hugging Face" },
  { icon: LangChain, name: "LangChain" },

  { icon: MySQL, name: "MySQL" },
  { icon: PostgreSQL, name: "PostgreSQL" },
  { icon: SQLServer, name: "SQL Server" },

  { icon: PowerBI, name: "Power BI" },

  { icon: Azure, name: "Microsoft Azure" },
  { icon: AWS, name: "AWS" },

  { icon: Git, name: "Git" },
  { icon: Github, name: "GitHub" },

  { icon: Docker, name: "Docker" },
  { icon: Streamlit, name: "Streamlit" },
  { icon: Jupyter, name: "Jupyter Notebook" },
  { icon: VSCode, name: "VS Code" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <img
            src={tech.icon}
            alt={tech.name}
            className="tech-icon-images"
          />
          <div className="tech-icons-text">{tech.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;