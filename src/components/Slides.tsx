import React from "react";

export interface SlidesProps {
  id: string;
}

export function Slides(props: SlidesProps) {
  return (
    <iframe
      title="d"
      src={`https://docs.google.com/presentation/d/e/${props.id}/embed?start=false&loop=false&delayms=3000`}
      frameBorder={0}
      width="100%"
      height="309"
      allowFullScreen={true}
    ></iframe>
  );
}
