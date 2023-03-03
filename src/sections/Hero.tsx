import React from "react";
const Fade = require("react-reveal/Fade");

export function Hero() {
  return (
    <section className="hero" id="intro">
      <Fade>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="text">
                <span className="subheading">Hello!</span>
                <h1 className="mb-4 mt-3">
                  I'm <span>Remo Jansen</span>
                </h1>
                <h2 className="mb-4">
                  Empowering digital product teams to thrive.
                </h2>
                <p>
                  <a
                    href="https://www.wolksoftware.com/"
                    className="btn btn-primary py-3 px-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hire me
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-fluid me" src="/me.png" alt="me" />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
