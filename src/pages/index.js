import * as React from "react";
import "../styles.css";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  console.log(data);

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

          {/* <div className="project">
            <GatsbyImage
              image={imageData}
              alt="CV Maker"
              className="project-img"
            /> */}
            <div className="project-details">
              <h3>CV Maker</h3>
              <p>
                This project implementation allows users to create their own CV
                with dynamic options based on a standard format.
              </p>
              <h4>Technologies</h4>
              <p>React, Zustand, CSS</p>
            </div>
          {/* </div> */}
        </section>
      </main>
      {data.allFile.nodes.map((node, index) => {
        const imageData = getImage(node.childImageSharp.gatsbyImageData);
        return (
          <div key={index}  >
            <GatsbyImage
              image={imageData}
              alt={`Project ${index + 1}`}
              className="project-img"
            />
          </div>
        );
      })}

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
  allFile(filter: { sourceInstanceName: { eq: "images" }, extension: { eq: "png" } }) {
    nodes {
      relativePath
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
}
`;
