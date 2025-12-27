import Head from "next/head";
import { Inter } from "next/font/google";
import { About } from "@/sections/About";
import { Hero } from "@/sections/Hero";
import { Work } from "@/sections/Work";
import { Education } from "@/sections/Education";
import { Awards } from "@/sections/Awards";
import { Projects } from "@/sections/Projects";
import { Books } from "@/sections/Books";
import { Talks } from "@/sections/Talks";
import ScrollHandler from "@/effects/ScrollHandler";
import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";
import Script from "next/script";
import { Meta } from "@/components/Meta";

export default function Home() {
  return (
    <>
      <Script src="ga.js" />
      <Head>
        <Meta />
      </Head>
      <Header />
      <ScrollHandler>
        <Hero />
        <About />
        <Work />
        <Education />
        <Awards />
        <Books />
        <Projects />
        <Talks />
      </ScrollHandler>
      <Footer />
    </>
  );
}
