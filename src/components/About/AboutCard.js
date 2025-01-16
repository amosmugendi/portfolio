import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amos Mugendi </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            I am currently employed as a software developer at Syknown Technologies.
            <br />
            I have completed a Bachelors Degree in Computer Science at the Catholic University of Eastern Africa.
            I also have a certification in Software Engineering from Moringa School.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Binge Watching Legal Dramas
            </li>
            <li className="about-activity">
              <ImPointRight /> Aspiring Traveller
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to make code make sense (Providing Tech Solutions)"{" "}
          </p>
          <footer className="blockquote-footer">gito_nga</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
