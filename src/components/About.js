import React from "react";
import Carousel from "../components/Carousel";
import { StaticImage } from "gatsby-plugin-image";

function About() {
  
  return (
    <section id="about">
      <h1 className="section-title"> About</h1>
      <p className="about">
        Hi there! I'm Aaron, a third year AI & ML engineering student with a
        passion for all things tech. As a self-taught full stack web developer,
        I love bringing creative ideas to life through fun side projects and
        actively contributing to the open source community.
        <br />
        <Carousel
          items={[
            {
              image: (
                <StaticImage
                  src="../images/icons/reactjs.svg"
                  alt="Tech 1"
                  className="tech-icon"
                />
              ),
              caption: "React",
            },
            {
              image: (
                <StaticImage
                  src="../images/icons/tailwind-css.svg"
                  alt="Tech 2"
                  className="tech-icon"
                />
              ),
              caption: "Tailwind",
            },
            {
              image: (
                <StaticImage
                  src="../images/icons/javascript.svg"
                  alt="Tech 1"
                  className="tech-icon"
                />
              ),
              caption: "JavaScript",
            },
            {
              image: (
                <StaticImage
                  src="../images/icons/nodedotjs.svg"
                  alt="Tech 1"
                  className="tech-icon"
                />
              ),
              caption: "NodeJS",
            },
            {
              image: (
                <StaticImage
                  src="../images/icons/mongo.svg"
                  alt="Tech 1"
                  className="tech-icon"
                />
              ),
              caption: "MongoDB",
            },
            {
              image: (
                <StaticImage
                  src="../images/icons/express.svg"
                  alt="Tech 1"
                  className="tech-icon"
                />
              ),
              caption: "ExpressJS",
            },
            {
              image: (
                <StaticImage
                  src="../images/icons/git.svg"
                  alt="Tech 1"
                  className="tech-icon"
                />
              ),
              caption: "Git",
            },
            {
              image: (
                <StaticImage
                  src="../images/icons/gatsby.svg"
                  alt="Tech 1"
                  className="tech-icon"
                />
              ),
              caption: "Gatsby",
            },
            {
              image: (
                <StaticImage
                  src="../images/icons/jest.svg"
                  alt="Tech 1"
                  className="tech-icon"
                />
              ),
              caption: "Jest",
            },
            {
              image: (
                <StaticImage
                  src="../images/icons/npm.svg"
                  alt="Tech 1"
                  className="tech-icon"
                />
              ),
              caption: "npm",
            },
            {
              image: (
                <StaticImage
                  src="../images/icons/vite.svg"
                  alt="Tech 1"
                  className="tech-icon"
                />
              ),
              caption: "Vite",
            },
            {
              image: (
                <StaticImage
                  src="../images/icons/webpack.svg"
                  alt="Tech 1"
                  className="tech-icon"
                />
              ),
              caption: "Webpack",
            },
          ]}
        />
        <br />
        Outside of coding, I'm a huge cinephile with a deep appreciation for the
        art of filmmaking. My love for visual storytelling extends to my side
        hustle as a videographer, where I find joy in crafting compelling videos
        of the businesses I collaborate with. When I need a break from the
        screen, I love hitting the road on my motorcycle and exploring the great
        outdoors.
      </p>
      {/* Call Github Api */}
      {/* Skill List ???*/}
    </section>
  );
}

export default About;
