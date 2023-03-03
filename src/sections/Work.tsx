import React from "react";
import { ContentCard } from "../components/ContentCard";
import { Section } from "../components/Section";

export interface WorkEntry {
  startDate: Date;
  endDate?: Date;
  role: string;
  company: string;
  description: JSX.Element;
  isFullTime: boolean;
}

const jobs: WorkEntry[] = [
  {
    company: "Wolk Software",
    description: (
      <div>
        Wolk software is a software management consulting firm dedicated to
        helping technology businesses to successfully design, build, and operate
        digital products and compete in the modern digital era. Wolk software's
        mission is to empower digital product teams to succeed. Wolk software
        provides services that enable technology businesses to reach their goals
        by becoming product-led organizations and achieving product and
        engineering excellence. As CEO, I look after all the aspects of the
        business from sales and legal to marketing, branding, and strategy.
      </div>
    ),
    role: "CEO & Founder",
    startDate: new Date(2018, 7, 1),
    isFullTime: true,
  },
  {
    company: "JSDayIE",
    description: (
      <React.Fragment>
        <p>
          JSDayIE is a 1-day single-track tech conference dedicated to the
          JavaScript community in Ireland featuring over 450 attendees and some
          of the best JavaScript professionals and organizations in Ireland.
        </p>
        <p>
          JSDayIE is the first JavaScript conference in Ireland and took place
          in 2019, on September 20th at The Round Room at the Mansion House in
          Dawson Street, Dublin.
        </p>
      </React.Fragment>
    ),
    role: "Executive Producer",
    startDate: new Date(2019, 0, 1),
    isFullTime: false,
  },
  {
    company: "CCT College Dublin",
    description: (
      <div>
        I was a lecturer of the Interactive Web Applications module to
        third-year students of the Bachelor of Science in information technology
        at CCT College Dublin.
      </div>
    ),
    role: "Lecturer",
    startDate: new Date(2018, 1, 1),
    isFullTime: false,
  },
  {
    company: "Aerlytix",
    description: (
      <React.Fragment>
        <p>
          Stellwagen Technology develops technologies for modeling and analyzing
          aircraft and associated investment vehicles.
        </p>
        <p>
          Founded in 2016, Stellwagen Technology develops cutting edge financial
          technologies to propel aircraft finance and investments forward. These
          technologies will enable the Stellwagen Group to optimize transactions
          and improve operating efficiency, and allow investors to explore and
          understand the unique characteristics of aviation investments. In
          addition, Stellwagen Technology will license customized technology
          solutions to other clients in the financial services industry.
        </p>
      </React.Fragment>
    ),
    role: "Tech lead / Senior Web Engineer",
    startDate: new Date(2017, 0, 1),
    endDate: new Date(2019, 3, 1),
    isFullTime: true,
  },
  {
    company: "Aon",
    description: (
      <React.Fragment>
        <p>
          Aon Centre for Innovation and Analytics in Dublin delivers data-driven
          insights to clients by leveraging our unmatched data capabilities
          across both risk and people solutions.
        </p>
        <p>
          As the owner of one of the world's largest repositories of risk and
          insurance placement information, we analyse Aon’s global premium flow
          to identify innovative new products and to provide impactful,
          fact-based market insights and reports as to which markets and which
          carriers provide the best value for our clients around the globe. We
          transform data received directly from brokers and other sources into
          actionable analytics.
        </p>
      </React.Fragment>
    ),
    role: "Senior Web Engineer",
    startDate: new Date(2015, 10, 1),
    endDate: new Date(2016, 11, 1),
    isFullTime: true,
  },
  {
    company: "Packt Publishing",
    description: (
      <p>I'm the author of a few books published by Packy Publishing.</p>
    ),
    role: "Author",
    startDate: new Date(2015, 0, 1),
    endDate: new Date(2019, 0, 1),
    isFullTime: false,
  },
  {
    company: "Compliance Solutions Strategies",
    description: (
      <div>
        Develop large scalable financial services, fund management and
        investment risk management applications for leading financial services
        companies such as Ameriprise, JP Morgan, M&G and others using Microsoft
        .Net technologies.
      </div>
    ),
    role: "Web Engineer",
    startDate: new Date(2012, 2, 1),
    endDate: new Date(2015, 10, 1),
    isFullTime: true,
  },
  {
    company: "Club Travel",
    description: (
      <div>
        VBScript, Asp, Ajax Web Applications, SQL Server design / development,
        Modelling, analysis and design, Agile development methodologies.
      </div>
    ),
    role: "Web Engineer",
    startDate: new Date(2011, 3, 1),
    endDate: new Date(2012, 2, 1),
    isFullTime: true,
  },
  {
    company: "Guadaltech",
    description: (
      <div>
        SAP WebDynpro, Web, Enterprise Java beans, Web services, XML, Java
        development, Projects documentation, Oracle, SQL and PLSQL.
      </div>
    ),
    role: "Web Engineer",
    startDate: new Date(2010, 8, 1),
    endDate: new Date(2011, 2, 1),
    isFullTime: true,
  },
  {
    company: "Lucca Leadership",
    description: (
      <div>
        Web site traffic growth, SEO, web site development,
        internationalization, hosting and traffic analytics.
      </div>
    ),
    role: "Web Engineer (Internship)",
    startDate: new Date(2010, 4, 1),
    endDate: new Date(2010, 5, 1),
    isFullTime: true,
  },
];

export function Work() {
  const options: any = {
    year: "numeric",
    month: "short",
  };
  return (
    <Section
      id="work"
      title="Work"
      content={
        <React.Fragment>
          <div className="card-columns work-container">
            {jobs.map((item, index) => {
              const start = item.startDate.toLocaleDateString("en-IE", options);
              const end =
                item.endDate !== undefined
                  ? item.endDate.toLocaleDateString("en-IE", options)
                  : "Present";
              const period = `${start}-${end}`;
              return (
                <ContentCard
                  key={index}
                  title1={period}
                  title2={item.role}
                  title3={`${item.company} (${
                    item.isFullTime ? "Full-time" : "Part-time"
                  })`}
                  content={item.description}
                />
              );
            })}
          </div>
        </React.Fragment>
      }
    />
  );
}
