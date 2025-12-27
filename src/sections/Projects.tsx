import React from "react";
import { Chart } from "../components/Chart";
import { Section } from "../components/Section";
import { ContentCard } from "../components/ContentCard";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      content={
        <div className="card-columns projects-container">
          <ContentCard
            title1="2023"
            title2="The Infinite Loop"
            title3="www.infinite-loop.org"
            content={
              <React.Fragment>
                <p>
                  The Infinite Loop (L∞P) is an Agile software development methodology
                  designed to help technology businesses create a culture of
                  trust, ownership, and data-driven continuous experimentation
                  that fosters sustainable product-led growth and
                  high-performance digital product teams that can thrive in the
                  age of disruption.
                </p>
                <div className="project-img">
                  <img
                    className="img-fluid"
                    alt="infinite loop"
                    src="https://www.infinite-loop.org/img/loop-b.png"
                  />
                </div>
                <p>
                  L∞P&apos;s purpose is to improve the well-being of
                  professionals in the software industry by creating a work in
                  an environment that makes them feel trusted, empowered,
                  engaged, productive and valued.
                </p>
                <a
                  href="https://www.infinite-loop.org/"
                  className="btn btn-primary py-3 px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </React.Fragment>
            }
          />
          <ContentCard
            title1="2019 - Present"
            title2="JSDayIE"
            title3="www.jsday.ie"
            content={
              <React.Fragment>
                <p>
                  I organized JSDayIE the first JavaScript conference in
                  Ireland. The event took place on the September 20th 2019 at
                  The Round Room at the Mansion House in Dawson Street, Dublin.
                </p>
                <iframe
                  title="JSDayIE 2019"
                  src="https://player.vimeo.com/video/473149967"
                  width="100%"
                  height="291"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
                <p>
                  JSDayIE is a 1-day single track tech conference dedicated to
                  the JavaScript community in Ireland featuring over{" "}
                  <a href="https://www.jsday.ie/gallery">500 attendees</a>, an
                  amazing lineup of{" "}
                  <a href="https://www.jsday.ie/speakers">
                    international speakers
                  </a>{" "}
                  and{" "}
                  <a href="https://www.jsday.ie/sponsors">
                    industry leading sponsors
                  </a>
                  .
                </p>
                <a
                  href="https://www.jsday.ie"
                  className="btn btn-primary py-3 px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </React.Fragment>
            }
          />
          <ContentCard
            title1="2015"
            title2="InversifyJS"
            title3="www.inversify.io"
            content={
              <React.Fragment>
                <p>
                  I created InversifyJS in 2015 while I was working on my first
                  TypeScript book. InversifyJS is a powerful and lightweight
                  inversion of control (IoC) container for JavaScript & Node.js
                  apps powered by TypeScript.
                </p>
                <Chart />
                <br />
                <p>
                  InversifyJS has reached over{" "}
                  <a href="https://npm-stat.com/charts.html?package=inversify&from=2015-04-15">
                    100 MILLION DOWNLOADS
                  </a>{" "}
                  on NPM and over{" "}
                  <a href="https://github.com/inversify/InversifyJS/stargazers">
                    9 THOUSAND STARS
                  </a>{" "}
                  on GitHub 🤯.
                </p>
                <a
                  href="https://github.com/inversify/InversifyJS"
                  className="btn btn-primary py-3 px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </React.Fragment>
            }
          />
        </div>
      }
    />
  );
}
