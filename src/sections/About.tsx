import React from "react";
import { SocialMedia } from "../components/SocialMedia";

export function About() {
  return (
    <section
      className="about ftco-about img ftco-section ftco-no-pb"
      id="about"
    >
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
                  I&apos;m Remo H. Jansen — Former{" "}
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
                  npm. I have a strong interest in high-performance software
                  teams, and my career purpose is to empower digital product
                  teams to thrive. I&apos;m originally from Seville 🇪🇸 but I
                  have been living in Dublin 🇮🇪 for over a decade. Besides
                  technology, I also enjoy endurance sports and spending time
                  outdoors.
                </p>
              </div>
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  );
}
