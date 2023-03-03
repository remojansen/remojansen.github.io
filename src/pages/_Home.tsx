import React from "react";
import { About } from "../sections/About";
import { Hero } from "../sections/Hero";
import { Work } from "../sections/Work";
import { Skills } from "../sections/Skills";
import { Education } from "../sections/Education";
import { Awards } from "../sections/Awards";
import { Projects } from "../sections/Projects";
import { Books } from "../sections/Books";
import { Talks } from "../sections/Talks";
import ScrollHandler from "../effects/ScrollHandler";

export function Home() {
  return (
    <ScrollHandler>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Education />
      <Awards />
      <Books />
      <Projects />
      <Talks />
    </ScrollHandler>
  );
}
