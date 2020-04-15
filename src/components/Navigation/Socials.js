import React from "react";
import Social from "./Social";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faMediumM,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import data from "../../data.json";

const Socials = () => {
  const socials = data.Socials;
  const fontawesomes = [
    faEnvelope,
    faTwitter,
    faGithub,
    faMediumM,
    faLinkedinIn,
  ];

  return (
    <div className="Socials">
      {socials.map((social, index) => {
        const icon = fontawesomes.find(
          (icon) => icon.iconName === social.iconName
        );
        return <Social key={index} icon={icon} url={social.url} />;
      })}
    </div>
  );
};

export default Socials;
