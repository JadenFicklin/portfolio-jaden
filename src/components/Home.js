import React from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  return (
    <>
      <h1 className="home-header">
        Hi, <br></br> I'm Jaden <br></br> web developer.
      </h1>
      <h5 className="home-sub-header">
        Devmountain Grad | Frontend React Engineer
      </h5>
      <a
        className="home-contact-me"
        href="https://www.linkedin.com/in/jaden-ficklin-b1686a21a/"
        target={"_blank"}
      >
        CONTACT ME
      </a>

      <Nav />

      <div className="code-animation-container">
        <svg
          id="logo1"
          width="220"
          height="264"
          viewBox="0 0 220 264"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M203.062 260.818L203.513 261H204H214.5H217V258.5V181V179.215L215.311 178.635L81.5 132.715V130.791L215.304 85.3673L217 84.7914V83V5V2.5H214.5H204H203.511L203.057 2.68447L4.0575 83.6845L2.5 84.3184V86V178V179.686L4.06249 180.318L203.062 260.818Z"
            stroke="white"
            stroke-width="5"
          />
        </svg>
        <svg
          id="logo2"
          width="242"
          height="507"
          viewBox="0 0 242 507"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 501.5V504H5H76.5H78.3025L78.872 502.29L238.872 21.7898L239 21.4053V21V4.99997V2.49997H236.5H165.5H163.699L163.129 4.20792L2.62879 484.708L2.5 485.094V485.5V501.5Z"
            stroke="white"
            stroke-width="5"
          />
        </svg>
        <svg
          id="logo3"
          width="220"
          height="264"
          viewBox="0 0 220 264"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 258.5V261H5H15.5H15.9865L16.4375 260.818L215.438 180.318L217 179.686V178V86V84.3184L215.443 83.6845L16.4425 2.68447L15.9893 2.5H15.5H5H2.5V5V83V84.7914L4.19634 85.3673L138 130.791V132.715L4.18852 178.635L2.5 179.215V181V258.5Z"
            stroke="white"
            stroke-width="5"
          />
        </svg>
      </div>
    </>
  );
}

export default Home;
