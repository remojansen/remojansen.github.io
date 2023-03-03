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
        <div className="card-columns">
          <ContentCard
            title1="2015"
            title2="InversifyJS"
            title3="www.github.com/inversify/InversifyJS"
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
                    40 MILLION DOWNLOADS
                  </a>{" "}
                  on NPM and over{" "}
                  <a href="https://github.com/inversify/InversifyJS/stargazers">
                    6 THOUSAND STARS
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
          <ContentCard
            title1="2019"
            title2="JSDayIE"
            title3="www.jsday.org"
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
                  JSDayIE 2019 is a 1-day single track tech conference dedicated
                  to the JavaScript community in Ireland featuring over{" "}
                  <a href="https://www.jsday.org/gallery">300 attendees</a>, an
                  amazing lineup of{" "}
                  <a href="https://www.jsday.org/speakers">
                    international speakers
                  </a>{" "}
                  and{" "}
                  <a href="https://www.jsday.org/sponsors">
                    industry leading sponsors
                  </a>
                  .
                </p>
                <a
                  href="https://www.jsday.org"
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
