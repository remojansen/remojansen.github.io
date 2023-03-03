import React from "react";
import { ProgressBar } from "react-bootstrap";
import { Section } from "../components/Section";
const Fade = require("react-reveal/Fade");

export interface SkillItem {
  name: string;
  level: number;
  variant: "success" | "warning" | "danger";
}

const skillItems: SkillItem[] = [
  { name: "JavaScript & TypeScript", level: 99, variant: "success" },
  { name: "JS Tooling", level: 99, variant: "success" },
  { name: "React & Redux", level: 98, variant: "success" },
  { name: "Node.js, Express.js & Nest.js", level: 98, variant: "success" },
  { name: "JS Architecture & Performance", level: 95, variant: "success" },
  { name: "SOA & REST", level: 95, variant: "success" },
  { name: "Azure", level: 93, variant: "success" },
  { name: "Unit testing & TDD", level: 93, variant: "success" },
  { name: "DDD & SOLID", level: 90, variant: "success" },
  { name: "DevOps", level: 85, variant: "warning" },
  { name: "AWS", level: 85, variant: "warning" },
  { name: "Domain-driven design", level: 85, variant: "warning" },
  { name: "Integration testing", level: 85, variant: "warning" },
  { name: "MongoDB & SQL", level: 85, variant: "warning" },
  { name: "ASP.Net & C#", level: 80, variant: "danger" },
  { name: "Docker", level: 75, variant: "danger" },
];

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      content={
        <Fade>
          <div className="row">
            {skillItems.map((item, itemIndex) => (
              <div className="col-md-6 animate-box" key={itemIndex}>
                <div
                  className="skill progress-wrap ftco-animate fadeInUp ftco-animated"
                  key={itemIndex}
                >
                  <h3>
                    {item.name}
                    <span className="level">{item.level}%</span>
                  </h3>
                  <ProgressBar now={item.level} variant={item.variant} />
                </div>
              </div>
            ))}
          </div>
        </Fade>
      }
    />
  );
}
