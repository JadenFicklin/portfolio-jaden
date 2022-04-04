import React from "react";
import Nav from "./Nav";
import "./About.css";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { ImGit } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";
import { GrHeroku } from "react-icons/gr";

function About() {
  return (
    <div>
      <Nav />
      <div className="about-info-box">
        <div className="about-header">About me</div>
        <div className="about-me-text">
          Hi, I'm Jaden Ficklin a Full-stack Developer located in Utah. I have a
          serious passion for all things code, animations and creating
          intuitive, dynamic user experiences. <br></br>
          <br></br>I've recently graduated from DevMountain bootcamp and I'm
          looking for a Front-end Junior position. I believe I would be a
          valuable asset as I aspire to help whoever I'm working with progress
          and succeed. <br></br>
          <br></br>I enjoy pushing myself to learn new concepts and working in
          teams to build something great.<br></br>
          <br></br>
          <span className="relocation-text">
            ( willing to relocate / work remote. )
          </span>
        </div>
      </div>
      <div className="skills-info-box">
        <div className="skills-header">Skills</div>
        <div className="skills">
          <div className="skills-box">
            <FaReact className="icon react" color="#4d4d4e" />
            <FaNodeJs className="icon" color="#4d4d4e" />
            <GrMysql className="icon" color="#4d4d4e" />
            <IoLogoJavascript className="icon" color="#4d4d4e" />
            <ImHtmlFive2 className="icon" color="#4d4d4e" />
            <IoLogoCss3 className="icon" color="#4d4d4e" />
            <ImGit className="icon" color="#4d4d4e" />
            <AiOutlineGithub className="icon" color="#4d4d4e" />
            <GrHeroku className="icon" color="#4d4d4e" />
          </div>
          <h2>Languages | Frameworks</h2>
          <p>React</p>
          <p>Node.js</p>
          <p>SQL</p>
          <p>Javascript</p>
          <p>HTML</p>
          <p>CSS</p>
          <h2>Developer Tools</h2>
          <p>Git</p>
          <p>Github</p>
          <h2>DevOps</h2>
          <p>Heroku</p>
        </div>
      </div>
    </div>
  );
}

export default About;
