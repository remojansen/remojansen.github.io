import React from "react";
import { Section } from "../components/Section";
import { ContentCard } from "../components/ContentCard";

export interface EducationEntry {
  startDate: Date;
  title: string;
  school: string;
  description?: JSX.Element;
  isOnline: boolean;
}

const educationItems: EducationEntry[] = [
  {
    school: "Google Analytics Academy",
    title: "Google Analytics Platform Principles",
    startDate: new Date(2014, 0, 1),
    isOnline: true,
  },
  {
    school: "Xamarin University",
    title: "Xamarin Certified Mobile Developer",
    startDate: new Date(2014, 0, 1),
    isOnline: true,
  },
  {
    school: "Xamarin University",
    title: "Xamarin Certified iOS Developer",
    startDate: new Date(2014, 0, 1),
    isOnline: true,
  },
  {
    school: "Xamarin University",
    title: "Xamarin Certified Android Developer",
    startDate: new Date(2014, 0, 1),
    isOnline: true,
  },
  {
    school: "New Horizons computer training centres",
    title: "Microsoft certified professional developer (MCPD)",
    startDate: new Date(2013, 0, 1),
    isOnline: false,
  },
  {
    school: "Stanford university",
    title: "Introduction to databases",
    startDate: new Date(2011, 0, 1),
    isOnline: true,
  },
  {
    school: "ETICOM Corporate University",
    title: "Certificate in ASP.NET",
    startDate: new Date(2011, 0, 1),
    isOnline: true,
  },
  {
    school: "ETICOM Corporate University",
    title: "Certificate in JavaScript",
    startDate: new Date(2011, 0, 1),
    isOnline: true,
  },
  {
    school: "ETICOM Corporate University",
    title: "Certificate in Spring Framework",
    startDate: new Date(2010, 0, 1),
    isOnline: true,
  },
  {
    school: "ETICOM Corporate University",
    title: "Certificate in Hibernate Framework",
    startDate: new Date(2010, 0, 1),
    isOnline: true,
  },
  {
    school: "ETICOM Corporate University",
    title: "Certificate in AJAX",
    startDate: new Date(2010, 0, 1),
    isOnline: true,
  },
  {
    school: "Universidad de Sevilla School of Computer Science",
    title: "Certificate in Joomla! (CMS)",
    startDate: new Date(2009, 0, 1),
    isOnline: true,
  },
  {
    school: "Certificate in Linux Server administration",
    title: "Certificate in Joomla! (CMS)",
    startDate: new Date(2008, 0, 1),
    isOnline: true,
  },
  {
    school: "Certificate in Linux Server administration",
    title: "Certificate in Oracle",
    startDate: new Date(2008, 0, 1),
    isOnline: true,
  },
  {
    school: "Salesians of St. Peter College",
    title: "Higher Certificate In Software Engineering",
    startDate: new Date(2008, 0, 1),
    isOnline: true,
  },
];

export function Education() {
  const options: any = {
    year: "numeric",
  };
  return (
    <Section
      id="education"
      title="Education"
      content={
        <div className="card-columns education-container">
          {educationItems.map((item, index) => {
            const start = item.startDate.toLocaleDateString("en-IE", options);
            return (
              <ContentCard
                key={index}
                title1={start}
                title2={item.title}
                title3={`${item.school} ${
                  item.isOnline ? "(Online Course)" : ""
                }`}
                content={
                  item.description ? (
                    item.description
                  ) : (
                    <React.Fragment></React.Fragment>
                  )
                }
              />
            );
          })}
        </div>
      }
    />
  );
}
