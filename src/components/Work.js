import React from "react";
import Nav from "./Nav";
import "./Work.css";
import ReactPlayer from "react-player";

function Work() {
  return (
    <>
      <a
        href="https://www.youtube.com/watch?v=-Zj5KCwzMwg"
        target="_blank"
        className="a-tag"
      >
        View Website
      </a>
      <Nav> </Nav>
      <div className="work-outer">
        <div className="projects-outer">
          <div className="projects-top">My projects</div>
          <div className="projects-bottom">
            <div className="project-left">
              <h4 className="proj-1-header">Euka</h4>

              <div className="proj-1-image">
                <ReactPlayer
                  url={"https://www.youtube.com/watch?v=-Zj5KCwzMwg"}
                  playing={true}
                  muted
                  controls={false}
                  width={"100%"}
                  height={"260px"}
                />
              </div>

              <p className="project-1-text">
                Euka is an Ecommerse website designed 7 weeks into my
                Devmountain bootcamp experience
              </p>
            </div>

            <div className="project-mid">
              <h4 className="proj-2-header">Sopi</h4>
              <div href="#" target="_blank" className="proj-2-image"></div>
              <p className="project-2-text">
                Sopi is a community website designed 14 weeks into my
                Devmountain bootcamp experience
              </p>
            </div>
            <div className="project-right">
              <h4 className="proj-3-header">Audo</h4>
              <div href="#" target="_blank" className="proj-3-image"></div>
              <p className="project-3-text">
                Audo is an audio based website designed 15 weeks into my
                Devmountain bootcamp experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
