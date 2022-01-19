import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import sipas from "../../Assets/Projects/sipas.png";
import kokeru from "../../Assets/Projects/kokeru.png";
import caritakita from "../../Assets/Projects/caritakita.png";
import nlp from "../../Assets/Projects/nlp.png";
import forecast from "../../Assets/Projects/forecast.png";
import cancer from "../../Assets/Projects/cancer.png";
import paper from "../../Assets/Projects/paper.png";
import hoax from "../../Assets/Projects/hoax.png"

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
              imgPath={sipas}
              isBlog={false}
              title="SIPAS"
              description="A website that provides data management features for incoming and outgoing mail, as well as printing reports for incoming and outgoing mail. this site was developed with the Waterfall process model with a Website-based Object Oriented Analysis and Design (OOAD) approach using the PHP programming language with the laravel framework and MySQL as database management."
              link="https://github.com/randa7/arsip-surat"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kokeru}
              isBlog={false}
              title="KokeRu"
              description="A software to assist building managers in controlling the cleanliness and tidiness of the building which is the responsibility of each Cleaning Service so that it can be run more efficiently without having to check directly in each room. &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"
              link="https://github.com/ahmadsakur/tubesppl"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={caritakita}
              isBlog={false}
              title="CaritaKita"
              description="dynamic blog website that allows users to post posts with several categories provided. this website was developed with native php and vanilla js.&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"
              link="https://github.com/randa7/CaritaKita"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nlp}
              isBlog={false}
              title="BBC Text Classification"
              description=" Used the BBC text dataset from laurencemoroney-blog and trained a NLP model using 'Keras' framework using LSTM . The model was successfully able to build a system that can accurately classify previously unseen news articles into appropriate categories. &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"
              link="https://github.com/randa7/BBC-Text-Classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forecast}
              isBlog={false}
              title="Temperature Prediction"
              description="Used the energy data dataset from UCI and trained a Time series model using 'Keras' framework using LSTM . The model was successfully able to build a system that can forecast temperature accurately based on predetermined timeframe.&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"
              link="https://github.com/randa7/Temperature-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cancer}
              isBlog={false}
              title="Skin Cancer Detection"
              description="Trained a Neural Network classifier using 'Skin Cancer MNIST: HAM10000 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of diagnostic categories in the realm of pigmented lesion. And the highest accuracy obtained with the model was 98.48%.
              Then used TFLite to deploy the model on android and ios."
              link="https://github.com/randa7/Skin-Cancer-Detection"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paper}
              isBlog={false}
              title="Image Classification [rock paper scissors]"
              description="Trained a CNN classifier using 'rockpaperscissors dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the shape of rock paper scissors and the highest accuracy obtained with the model was 97.5%.&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"
              link="https://github.com/randa7/rockpaperscissors"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hoax}
              isBlog={false}
              title="Text Classification [Hoax Detection]"
              description="
              Deploy the LSTM machine learning model to fulfill the Associate Data Scientist's final project in the form of a hoax detection model using datasets collected by themselves through the data.go.id portal and the turnbackhoax.id website."
              link="https://indonesianhoaxdetection.herokuapp.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
