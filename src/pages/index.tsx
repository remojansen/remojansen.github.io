import Head from 'next/head'
import { Inter } from 'next/font/google'
import { About } from "../sections/About";
import { Hero } from "../sections/Hero";
import { Work } from "../sections/Work";
import { Education } from "../sections/Education";
import { Awards } from "../sections/Awards";
import { Projects } from "../sections/Projects";
import { Books } from "../sections/Books";
import { Talks } from "../sections/Talks";
import ScrollHandler from "../effects/ScrollHandler";
import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Remo H. Jansen  — Former Microsoft MVP, CEO & Founder at Wolk Software</title>
        <meta name="description" content="Empowering digital product teams to thrive — Former Microsoft MVP, CEO & Founder at Wolk Software, EP at JSDayIE, published author and creator of InversifyJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
  )
}
