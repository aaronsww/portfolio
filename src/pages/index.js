import * as React from "react";
import "../styles.css";
import { graphql } from "gatsby";
import Project from "../components/Project";
import VantaNetBackground from "../components/VantaNetBackground";
import About from "../components/About";

export default function Home({ data }) {
  console.log(data);
  const projectDetails = [
    {
      title: "Mini Message Board",
      summary:
        "This full-stack web application allows users to view messages on a message board, and logged-in users can add messages to the board.",
      tech: "Express, MongoDB, React, Node.js",
    },
    {
      title: "CV Maker",
      summary:
        "This project implementation allows users to create their own CV with dynamic options based on a standard format.",
      tech: "React, Zustand, CSS",
    },
    {
      title: "Shopping Cart",
      summary:
        "This project is a virtual shopping cart that mirrors the functionality of a shopping e-commerce website where users can simulate the experience of shopping online from the comfort of their own device.",
      tech: "React, React Router, Zustand, CSS",
    },
    {
      title: "Memory Card",
      summary:
        "This project implementation allows users to create their own CV with dynamic options based on a standard format.",
      tech: "React, Zustand, CSS",
    },
  ];

  const projects = data.allFile.nodes.map((node, index) => {
    return { ...projectDetails[index], node };
  });

  return (
    <div>
      <VantaNetBackground />
      <header>
        <nav>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="intro">
          <div className="name">
            Jeevan
            <br></br>
            <span>Aaron</span>
          </div>
          <div className="role">
            Web <br></br> <span>Developer</span>
          </div>
        </section>

        <About />

        <section id="portfolio">
          <h1 className="section-title">Portfolio</h1>
          {projects.map((projectData, index) => {
            return <Project key={index} data={projectData} />;
          })}
        </section>
      </main>

      <footer>
        <section id="contact">
          <h1 className="section-title"> Contact</h1>
          <h2>Get in touch</h2>
        </section>
      </footer>
    </div>
  );
}

export const query = graphql`
  query MultipleImages {
    allFile(
      filter: { sourceInstanceName: { eq: "images" }, extension: { eq: "png" } }
      sort: { fields: relativePath, order: ASC } # Add the sort argument here
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`;
