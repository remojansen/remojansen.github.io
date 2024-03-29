import React from "react";
const Fade = require("react-reveal/Fade");

export function Hero() {
  return (
    <section className="hero" id="intro">
      <Fade>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img className="img-fluid me" src="/me.png" alt="me" />
            </div>
            <div className="col-md-6">
              <div className="text">
                <span className="subheading">Hello!</span>
                <h1 className="mb-4 mt-3">
                  I&apos;m <span>Remo H. Jansen</span>
                </h1>
                <h2 className="mb-4">
                  Empowering digital product teams to thrive — Former Microsoft
                  MVP, CEO & Founder at Wolk Software, EP at JSDayIE, published
                  author and creator of InversifyJS
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
          </div>
        </div>
      </Fade>
    </section>
  );
}
