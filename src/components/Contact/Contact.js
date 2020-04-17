import React from "react";
import "./Contact.css";
import SocialRow from "./SocialRow";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faMediumM,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import data from "../../data.json";

const Contact = () => {
  const socials = data.Socials;
  const fontawesomes = [
    faEnvelope,
    faTwitter,
    faGithub,
    faMediumM,
    faLinkedinIn,
  ];

  return (
    <div className="Contact section-container">
      <h1 className="section-title">CONTACT</h1>
      <p className="section-description">
        Questions or interested in working together? Get in touch!
      </p>
      <div className="social-container">
        {socials.map((social, index) => {
          const { type, url, username, iconName } = social;
          const icon = fontawesomes.find((icon) => icon.iconName === iconName);

          return (
            <SocialRow
              key={index}
              label={type}
              icon={icon}
              url={url}
              username={username}
            />
          );
        })}
      </div>

      <p className="section-description">
        I'd love to grab a coffee, either in-person or virtually, and chat about
        the ways we can help each other and others. I'm open to anything from
        quick fixes to a full-time gig, as well as speaking and mentorship
        opportunities.
        <br />
        <br />A lot of people have helped me get to where I am today and I am
        all about paying it forward, so no matter how big or small the request,
        just ask!
      </p>
    </div>
  );
};

export default Contact;
