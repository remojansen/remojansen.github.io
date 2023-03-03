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
                    I'm a full-stack web engineering tech lead and the managing
                    director of <a href="#work">Wolk Software</a>. I am
                    originally from Seville (Spain), but I have been living in
                    Dublin (Ireland) since 2010. I'm the author of several books
                    on <a href="#books">TypeScript</a> and I am a former{" "}
                    <a href="#awards">Microsoft MVP</a>. For over a decade, I
                    have worked with a variety of languages, frameworks and
                    operating systems. As a result, I have developed strong
                    coding and debugging skills. I have also gained experience
                    implementing DevOps processes and training, coaching and
                    managing on-site and remote web engineering teams. I love{" "}
                    <a href="#projects">open source</a> and working with the
                    tech <a href="#projects">community</a>.
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
