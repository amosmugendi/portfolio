import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Student from "../../Assets/Projects/Student.png";
import movies from "../../Assets/Projects/movies.png";
import Tain from "../../Assets/Projects/Tain.png";
import pos from "../../Assets/Projects/pos.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={pos}
              isBlog={false}
              title="POS"
              description="A robust Point of Sale (POS) system built with React.js, Node.js, and MongoDB to streamline sales and inventory management. It features real-time product tracking, receipt generation, multi-payment support, and analytics dashboards for sales insights. With an intuitive Material-UI interface and secure role-based access, it ensures efficiency and reliability for retail businesses."
              ghLink="https://github.com/amosmugendi/POS---frontend"
              demoLink="http://syknown.tech/app/pos"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tain}
              isBlog={false}
              title="Train Booking System"
              description="A seamless Train Booking System built with React.js, Flask, and SQLite, designed to simplify ticket reservations and user management. It allows users to book trains, view schedules, manage profiles, and access ticket details, with secure authentication using JWT. Featuring a user-friendly interface and real-time updates, it ensures convenience and efficiency for passengers and operators alike."
              ghLink="https://github.com/amosmugendi/TRAIN-BOOKING-SYSTEM"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Student}
              isBlog={false}
              title="Student Portal API"
              description="A feature-rich Student Portal API built with the Django framework, designed to manage student profiles, courses, and grades efficiently. It provides secure authentication, role-based access for admins and students, and endpoints for real-time data retrieval and updates. With robust relational models and RESTful API design, it ensures seamless integration with frontend systems while maintaining scalability and performance."
              ghLink="https://github.com/amosmugendi/Student_Portal_API"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="gito_nga Portfolio"
              description="A modern and responsive personal portfolio built with Next.js, showcasing projects, skills, and experiences. It features dynamic routing, server-side rendering for optimal performance, and a sleek, user-friendly design. Optimized for SEO, it provides a seamless browsing experience while highlighting professional achievements and capabilities."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title="Movie Database"
              description=" A Movie Database web app that lets users create a personalized 'To-Watch' list by favoriting movies they love. Built with React.js and integrated with a RESTful API, it provides seamless movie browsing, search functionality, and real-time updates to the favorites list. With an intuitive interface and smooth performance, it offers a convenient way to organize and track must-watch movies."
              ghLink="https://github.com/amosmugendi/movie_app"
              demoLink="https://velvety-gnome-2e028c.netlify.app/"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
