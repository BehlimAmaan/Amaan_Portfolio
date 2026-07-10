import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Hi! I'm <b className="purple">Amaan Behlim</b>, an aspiring{" "}
            <b className="purple">AI & Machine Learning Engineer</b> passionate about
            building intelligent applications that solve real-world problems using
            Machine Learning, Deep Learning, and Generative AI.
            <br />
            <br />
            I have hands-on experience working with
            <i>
              <b className="purple">
                {" "}
                Python, TensorFlow, Scikit-learn, NumPy, Pandas, Hugging Face, LangChain,
                SQL, and Streamlit
              </b>
            </i>
            to build scalable AI-powered solutions.
            <br />
            <br />
            My primary areas of interest include
            <i>
              <b className="purple">
                {" "}
                Machine Learning, Deep Learning, Natural Language Processing (NLP),
                Large Language Models (LLMs), Retrieval-Augmented Generation (RAG),
                Computer Vision, and Data Analytics.
              </b>
            </i>
            <br />
            <br />
            I've developed projects such as an
            <b className="purple"> AI Video Agent</b>,
            <b className="purple"> Movie Recommendation System</b>, and
            <b className="purple"> Diabetes Prediction System</b>, where I applied
            modern AI techniques to solve practical problems.
            <br />
            <br />
            I'm also experienced with
            <i>
              <b className="purple">
                {" "}
                AWS, Microsoft Azure, Docker, Git, GitHub, Power BI, and Jupyter Notebook
              </b>
            </i>
            and enjoy building end-to-end AI applications that combine data, machine
            learning, and modern deployment practices.
          </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
