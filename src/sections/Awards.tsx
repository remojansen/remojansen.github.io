import React from "react";
import { Section } from "../components/Section";
import { ContentCard } from "../components/ContentCard";

export interface AwardsItems {
  start: Date;
  end?: Date;
  title: string;
  org: string;
  description: JSX.Element;
}

const awardItems: AwardsItems[] = [
  {
    start: new Date(2016, 1, 1),
    end: new Date(2019, 1, 1),
    description: (
      <React.Fragment>
        <p>
          The Microsoft Most Valuable Professional (MVP) award is given to
          exceptional, independent community leaders who share their passion,
          technical expertise, and real-world knowledge of Microsoft products
          with others.
        </p>
        <p>
          <a
            href="https://mvp.microsoft.com/en-US/Overview"
            className="btn btn-primary py-3 px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </p>
        <div className="card-img">
          <img
            alt="The Microsoft Most Valuable Professional (MVP) award"
            src="/mvp.png"
          />
        </div>
      </React.Fragment>
    ),
    org: "mvp.microsoft.com",
    title: "Microsoft Most Valuable Professional (MVP)",
  },
  {
    start: new Date(2013, 1, 1),
    description: (
      <React.Fragment>
        <p>
          The Realex Fire Web Awards are held annually to recognise people who
          do great things on the web. The awards are judged transparently and
          are open to anyone in Ireland. I was nominated for my work in the site
          fundcentre.newireland.ie.
        </p>
        <a
          href="http://webawards.ie/"
          className="btn btn-primary py-3 px-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </React.Fragment>
    ),
    org: "webawards.ie",
    title: "Best financial services website (Semi-finalist)",
  },
  {
    start: new Date(2008, 1, 1),
    description: (
      <React.Fragment>
        <p>
          I worked with two of my college friends and the school's psychology
          team, for a few months on a video game for the treatment of children
          diagnosed with selective mutism. We tried to use augmented reality,
          voice capture and reward systems to encourage children to talk first
          with virtual characters and after introducing family members and
          school friends into the game. We used Microsoft XNA, but sadly Xbox
          Kinect wasn't available in 2008.
        </p>
        <a
          href="https://zaragoza.salesianos.edu/premiodonbosco/"
          className="btn btn-primary py-3 px-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </React.Fragment>
    ),
    org: "zaragoza.salesianos.edu/premiodonbosco",
    title:
      "National research and technological innovation award (Semi-finalist)",
  },
];

export function Awards() {
  const options: any = {
    year: "numeric",
  };
  return (
    <Section
      id="awards"
      title="Awards"
      content={
        <div className="awards awards-container card-columns">
          {awardItems.map((item, index) => {
            const start = item.start.toLocaleDateString("en-IE", options);
            const end = item.end
              ? item.end.toLocaleDateString("en-IE", options)
              : null;
            const preriod = `${start}${end ? "-" + end : ""}`;
            return (
              <ContentCard
                key={index}
                title1={preriod}
                title2={item.title}
                title3={item.org}
                content={item.description}
              />
            );
          })}
        </div>
      }
    />
  );
}
