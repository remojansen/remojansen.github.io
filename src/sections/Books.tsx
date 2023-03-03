import React from "react";
import { Section } from "../components/Section";
import { ContentCard } from "../components/ContentCard";

interface BooksItem {
  title: string;
  isbn: string;
  publisher: string;
  year: string;
  url: string;
  img?: string;
  isAuthor: boolean;
}

const books: BooksItem[] = [
  {
    title: "The Infinite Loop",
    isbn: "TBD",
    publisher: "Wolk Software",
    year: "2023",
    url: "https://www.infinite-loop.org/book/",
    img: "https://www.infinite-loop.org/img/book.png",
    isAuthor: true,
  },
  {
    title: "Functional Programming with Typescript",
    isbn: "9781788831437",
    publisher: "Packt Publishing",
    year: "2019",
    url: "https://functionaltypescript.wolksoftware.com/",
    img: "https://functionaltypescript.wolksoftware.com/assets/functional-typescript-cover-TRANSPARENT.png",
    isAuthor: true,
  },
  {
    title: "Learning TypeScript (2nd Edition)",
    isbn: "9781788391474",
    publisher: "Packt Publishing",
    year: "2018",
    url: "https://learningtypescript.wolksoftware.com/",
    img: "https://learningtypescript.wolksoftware.com/assets/learning-typescript-cover-TRANSPARENT.png",
    isAuthor: true,
  },
  {
    title: "TypeScript: Modern JavaScript Development",
    isbn: "9781787289086",
    publisher: "Packt Publishing",
    year: "2016",
    url: "https://amzn.to/2R6eRfM",
    isAuthor: true,
  },
  {
    title: "Learning TypeScript (Chinese Edition)",
    isbn: "9787121300479",
    publisher: "Publishing House of Electronics Industry (PHEI)",
    year: "2015",
    url: "https://amzn.to/2SCioiu",
    isAuthor: true,
  },
  {
    title: "Learning TypeScript",
    isbn: "9781783985548",
    publisher: "Packt Publishing",
    year: "2015",
    url: "https://amzn.to/2SAWjRz",
    isAuthor: true,
  },
  {
    title: "Mastering TypeScript",
    isbn: "9781784399665",
    publisher: "Packt Publishing",
    year: "2015",
    url: "https://amzn.to/2SzScoP",
    isAuthor: false,
  },
];

export function Books() {
  return (
    <Section
      id="books"
      title="Books"
      content={
        <div className="card-columns books-container">
          {books.map((item, index) => {
            return (
              <ContentCard
                key={index}
                title1={item.year}
                title2={item.title}
                title3={`${item.isAuthor ? "Author" : "Technical Reviewer"}, ${
                  item.publisher
                } (ISBN: ${item.isbn})`}
                content={
                  <React.Fragment>
                    <a
                      href={item.url}
                      className="btn btn-primary py-3 px-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order now
                    </a>
                    {item.img ? (
                      <div className="card-img">
                        <img alt={item.title} src={item.img} />
                      </div>
                    ) : null}
                  </React.Fragment>
                }
              />
            );
          })}
        </div>
      }
    />
  );
}
