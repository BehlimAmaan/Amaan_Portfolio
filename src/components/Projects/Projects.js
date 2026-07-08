import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/fire.png";
import emotion from "../../Assets/Projects/word.png";
import editor from "../../Assets/Projects/diabetic.png";
import chatify from "../../Assets/Projects/ai video.png";
import suicide from "../../Assets/Projects/smart.png";
import bitsOfCode from "../../Assets/Projects/Recommandation.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AI Video Agent"
              description="An AI-powered assistant that answers questions from videos and documents using context-aware retrieval for accurate responses.
              Built with LLMs, LangChain, RAG, ChromaDB, and Hugging Face embeddings for intelligent semantic search."
              ghLink="https://github.com/BehlimAmaan/AI-Video-Chat-Bot-using-RAG"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Recommendation System"
              description="A personalized movie recommendation platform that suggests similar movies based on user preferences and movie content.
              Developed using Python, Pandas, Scikit-learn, TF-IDF, and Cosine Similarity, and deployed with Streamlit."
              ghLink="https://github.com/BehlimAmaan/movie-recommended-system"
              demoLink="https://moviemind-ai.streamlit.app/%5D%28https:/moviemind-ai.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Diabetes-Prediction-System"
              description="A machine learning application that predicts the likelihood of diabetes using patient health data for early risk assessment.
              Built using Python, Scikit-learn, XGBoost, with EDA, feature engineering, and hyperparameter tuning."
              ghLink="https://github.com/BehlimAmaan/Diabetes-Prediction-System-ML"
              demoLink="https://diabetes-checking-system.streamlit.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Fire Predictor"
              description="An AI-based system that predicts forest fire risk using weather and environmental data to support early prevention.
              Implemented using Python, Machine Learning algorithms, data preprocessing, and predictive analytics."
              ghLink="https://github.com/BehlimAmaan/Fire-Risk-Predictor"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Smart Attendence"
              description="An AI-powered attendance system that automatically marks attendance using face recognition with liveness detection for enhanced security.
              Developed using Python, OpenCV, Deep Learning, Computer Vision, and facial recognition techniques."
              ghLink="https://github.com/BehlimAmaan/Smart-Attendance"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Next Word Predictor"
              description="A deep learning application that predicts the next word in a sentence to provide intelligent text completion.
              Built using LSTM neural networks, TensorFlow/Keras, and NLP techniques for sequence prediction."
              ghLink="https://github.com/BehlimAmaan/Next-Word-Prediction-LSTM-RNN"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
