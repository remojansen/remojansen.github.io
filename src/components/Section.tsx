import React from "react";

export interface SectionProps {
  id: string;
  title: string;
  subtitle?: string | JSX.Element;
  content: JSX.Element;
}

export function Section(props: SectionProps) {
  return (
    <section className="ftco-section ftco-no-pb" id={props.id}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 heading-section text-center ftco-animate fadeInUp ftco-animated">
            <h2 className="mb-4">{props.title}</h2>
            {typeof props.subtitle === "string" ? (
              <p>{props.subtitle}</p>
            ) : (
              props.subtitle
            )}
          </div>
        </div>
        {props.content}
      </div>
    </section>
  );
}
