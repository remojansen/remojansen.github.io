import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faStackOverflow,
  faGithub,
  faDev,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface BtnIconProps {
  url: string;
  icon: any;
}

function BtnIcon(props: BtnIconProps) {
  return (
    <a href={props.url}>
      <span className="icon">
        <FontAwesomeIcon icon={props.icon} width={25} />
      </span>
    </a>
  );
}

export function SocialMedia() {
  return (
    <div className="social-icon">
      <BtnIcon url="mailto:remo.jansen@wolksfotware.com" icon={faEnvelope} />
      <BtnIcon url="https://dev.to/remojansen" icon={faDev} />
      <BtnIcon url="https://twitter.com/RemoHJansen" icon={faTwitter} />
      <BtnIcon
        url="https://stackoverflow.com/users/606821/remo-h-jansen"
        icon={faStackOverflow}
      />
      <BtnIcon
        url="https://www.linkedin.com/in/remojansen/"
        icon={faLinkedin}
      />
      <BtnIcon url="https://github.com/remojansen" icon={faGithub} />
    </div>
  );
}
