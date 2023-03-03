import React from "react";
import { SocialMedia } from "../components/SocialMedia";
const Fade = require("react-reveal/Fade");

export function About() {
  return (
    <section
      className="about ftco-about img ftco-section ftco-no-pb"
      id="about"
    >
      <Fade>
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-8 col-lg-5">
              <iframe
                title="Interview"
                src="https://player.vimeo.com/video/471691915"
                width="100%"
                height="400"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen={true}
              ></iframe>
            </div>
            <div className="col-md-4 col-lg-7 pl-lg-5 pb-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                  <h2 className="mb-4">About me</h2>
                  <p>
                    Empowering digital product teams to thrive — Former{" "}
                    <a
                      href="https://mvp.microsoft.com/en-us/PublicProfile/5002223"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Microsoft MVP,{" "}
                    </a>
                    CEO & Founder of{" "}
                    <a
                      href="https://www.wolksoftware.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wolk Software
                    </a>{" "}
                    and EP at{" "}
                    <a
                      href="https://www.jsday.ie"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      JSDayIE
                    </a>
                    , and the author of{" "}
                    <a
                      href="https://www.amazon.com/stores/Remo-H.-Jansen/author/B015LX8AZM"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      several books on TypeScript
                    </a>
                    , and{" "}
                    <a
                      href="https://inversify.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      InversifyJS
                    </a>
                    , an open-source project with over 100 million downloads on
                    npm. Remo has a strong interest in high-performance software
                    teams and is on a mission to empower digital product teams
                    to thrive. Besides technology, he also enjoys endurance
                    sports and spending time outdoors.
                  </p>
                </div>
              </div>
              <SocialMedia />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
