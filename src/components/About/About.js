import React from "react";
import "./About.css";
import Bullet from "./Bullet";
import {
  faFighterJet,
  faPassport,
  faGlobeAfrica,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="About section-container">
      <h1 className="section-title">ABOUT ME</h1>
      <div className="section-description">
        <h2 className="about-subtitle">Snapshot:</h2>
        <Bullet
          icon={faFighterJet}
          description="Veteran of the United States Air Force"
        />

        <Bullet
          icon={faPassport}
          description="Dual Citizen with the United Kingdom"
        />
        <Bullet
          icon={faGlobeAfrica}
          description="World Traveler: 41 countries, 6 continents, 1 planet"
        />
        <h2 className="about-subtitle">Summary:</h2>
        <p className="about-description">
          My path into tech has been a varied one. Opting to enlist in the U.S.
          Air Force straight out of high school, I would later obtain a Bachelor
          of Science degree from California State University, Chico. Across
          several states, and even across the pond, I would spend the better
          part of the next decade rising through the ranks of the hospitality
          industry; from folding towels at a beach resort on Hilton Head Island
          to managing multiple inns and vacation rental properties in California
          Wine Country.
        </p>
        <p className="about-description">
          The fall of 2018 signaled the start of a new chapter: a six-month
          journey across the globe, followed by a resettlement in Portland,
          Oregon. While attending a full-time coding bootcamp at the{" "}
          <a
            href="https://pdxcodeguild.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PDX Code Guild
          </a>
          , I became immersed in programming and grew my knowledge from near
          zero to the point of constructing and launching a fully fledged{" "}
          <a
            href="https://foodcartcity.pythonanywhere.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            web application
          </a>
          . Though far from perfect, the project itself served as a point of
          pride; of maintaining motivation and exploring possibilities.
        </p>
        <p className="about-description">
          Post-graduation, the trend continued: one of self-study and community
          engagement. I consumed everything JavaScript & React, assumed the
          volunteer role of Social Media & Marketing Coordinator with the{" "}
          <a
            href="https://www.meetup.com/Portland-JR-DEVELOPER-Meetup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portland Jr. Developer
          </a>{" "}
          group and accepted an invitation to participate as a member of{" "}
          <a
            href="https://the-collab-lab.codes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Collab Lab's
          </a>{" "}
          4th cohort. All of this culminating with my 1st professional
          programming gig as a contracted software engineer at{" "}
          <a
            href="https://gridrival.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GridRival
          </a>
          ; helping develop the client side of the first-to-market fantasy
          motorsports platform.
        </p>
        <p className="about-description">
          Following the arrival of COVID-19 and the corresponding job
          disruption, I joined back up with the folks at The Collab Lab to help
          develop a{" "}
          <a
            href="https://tcl-pilot-2020-05.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            pilot project
          </a>{" "}
          for future participants. Meanwhile, I also continued work on a number
          of various personal side projects; one of which I hope can be useful
          in helping ease the financial burden on local businesses in my
          community.
        </p>
      </div>
    </div>
  );
};

export default About;
