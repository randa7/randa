import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/randa.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {



  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Associate Data Scientist [MSIB AI Microcredential]"
              date="November 2021 - December 2021"
              content={[
                " Complete all courses of associate data science microcredential from DIKTI (Direktorat Jenderal Pendidikan Tinggi)/Directorate General of Higher Education",
                "Built a final project about NLP (Natural Language Processing) model to predict the validity of a news using LSTM model",
              ]}
            />

            <Resumecontent
              title="Web Developer Intern [SMKN 2 Teluk Kuantan]"
              date="January 2021 - March 2021"
              content={[
                "Successfully develop SIPAS (Sistem Informasi Pengelolaan Arsip Surat), a system made to help institution to manage incoming and outgoing mails data.",
              ]}
            />
            
            <Resumecontent
              title="Laboratory Assistant [Diponegoro University]"
              date="October 2020 - December 2020"
              content={[
                "Had successfully organized, demonstrated, and executed good laboratory works as a respectable mentor and trustworthy assistant for Numerical Methods subjects.",
              ]}
            />

            <h3 className="resume-title">Certificates</h3>

            <Resumecontent
              title=""
              content={[
                `Machine Learning Development at Dicoding`,
                `Machine Learning for Beginners at Dicoding`,
                `Basic Data Visualization at Dicoding`,
                `Python for Beginners at Dicoding`,
                `Kotlin for Beginners at Dicoding`,
                `Creating Android Apps for Beginners at Dicoding`,
                `Cloud Practitioner Essentials at Dicoding`,
                `Laravel Web Development at Sanbercode`,
              ]}
            />

          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science [Diponegoro University] "
              date="2018 - Present"
              content={[`CGPA: 3.84 (Till 7th Sem)`]}
            />
            <Resumecontent
              title="Natural Science [SMAN 1 Doloksanggul]"
              date="2016 - 2018"
              content={[]}
            />
            
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Kattis 11580`,
              ]}
            />

          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
