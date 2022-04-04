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
        <h2>languages | frameworks</h2>
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
  );
}

export default About;
