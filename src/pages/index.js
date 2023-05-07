import * as React from "react";
import "../styles.css";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Project from "../components/Project";

export default function Home({ data }) {
  console.log(data);
  const projectDetails = [
    {
      title: "Mini Message Board",
      summary:
        "This project implementation allows users to create their own CV with dynamic options based on a standard format.",
      tech: "React, Zustand, CSS",
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
        "This project implementation allows users to create their own CV with dynamic options based on a standard format.",
      tech: "React, Zustand, CSS",
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

  const project = {
    title: "CV Maker",
    summary:
      "This project implementation allows users to create their own CV with dynamic options based on a standard format.",
    tech: "React, Zustand, CSS",
  };

  // const imageData = getImage(data.file.childImageSharp.gatsbyImageData);

  return (
    <div>
      <header>
        <nav>
          <a href="">Portfolio</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </nav>
      </header>

      <main>
        <section className="intro">
          <div className="name">
            <span>Jeevan </span>
            <br></br>
            <span>Aaron</span>
          </div>
          <p className="role">
            Web <br></br> Developer
          </p>
        </section>

        <section>
          <h1 className="section-title"> About</h1>
          <p>
            I'm a Front End Developer based out of Phoenix, Arizona. I love the
            creative process of building visually appealing designs and
            interactive user interfaces. I'm constantly seeking opportunities to
            learn new concepts, technologies, and tools to create the best
            possible user experience. Outside of coding, I'm an amateur rock
            climber, a semi-professional pitcher of crumpled paper balls for my
            cat Mango, and an avid reader of fantasy books.
          </p>
          {/* Call Github Api */}
          {/* Skill List ???*/}
        </section>

        <section>
          <h1 className="section-title">Projects</h1>
          {/* {data.allFile.nodes.map((node, index) => {
            return <Project key={index} node={node} data={project} />;
          })} */}
          {projects.map((projectData, index) => {
            return <Project key={index} data={projectData} />;
          })}
        </section>
      </main>

      <footer>
        <section>
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
