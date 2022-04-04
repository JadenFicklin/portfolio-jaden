import React from "react";
import { useNavigate } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "./Nav.css";

function Nav() {
  let navigate = useNavigate();
  return (
    <nav className="nav-outer">
      <div
        className="top"
        onClick={() => {
          navigate("/");
        }}
      >
        jf
      </div>
      <div className="mid">
        <button
          className="home"
          onClick={() => {
            navigate("/");
          }}
        >
          <AiFillHome className="home2" color="#4d4d4e" />
        </button>
        <button
          className="about"
          onClick={() => {
            navigate("/about");
          }}
        >
          <IoPerson className="about2" color="#4d4d4e" />
        </button>
        <button
          className="work"
          onClick={() => {
            navigate("/work");
          }}
        >
          <MdWork className="work2" color="#4d4d4e" />
        </button>
      </div>
      <div className="low">
        <a
          className="github"
          href="https://github.com/JadenFicklin"
          target={"_blank"}
        >
          <BsGithub className="github2" color="#4d4d4e" />
        </a>
        <a
          className="linkdin"
          href="https://www.linkedin.com/in/jaden-ficklin-b1686a21a/"
          target={"_blank"}
        >
          <BsLinkedin className="linkdin2" color="#4d4d4e" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
