import React from "react";
import { Card } from "react-bootstrap";
const Fade = require("react-reveal/Fade");

export interface ContentCardProps {
  title1: string;
  title2: string;
  title3: string;
  content: JSX.Element;
  disableFadeIn?: boolean;
}

export function ContentCard(props: ContentCardProps) {
  const card = (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{props.title1}</Card.Title>
        <Card.Subtitle className="h2">{props.title2}</Card.Subtitle>
        <Card.Subtitle className="card-subtitle-2 mt-2">
          {props.title3}
        </Card.Subtitle>
        <div className="mt-4">{props.content}</div>
      </Card.Body>
    </Card>
  );
  return props.disableFadeIn === true ? (
    <React.Fragment>{card}</React.Fragment>
  ) : (
    <Fade>{card}</Fade>
  );
}
