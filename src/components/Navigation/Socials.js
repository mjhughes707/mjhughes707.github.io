import React from "react";
import Social from "./Social";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faMediumM,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  const username = "mjhughes707";

  return (
    <div className="Socials">
      <Social icon={faEnvelope} url={`mailto:${username}@gmail.com`} />
      <Social
        icon={faLinkedinIn}
        url={`https://www.linkedin.com/in/${username}`}
      />
      <Social icon={faGithub} url={`https://github.com/${username}`} />
      <Social icon={faTwitter} url={`https://twitter.com/${username}`} />
      <Social icon={faMediumM} url={`https://medium.com/@${username}`} />
    </div>
  );
};

export default Socials;
