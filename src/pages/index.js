import * as React from "react";
import "../styles.css";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  console.log(data);

  const imageData = getImage(data.file.childImageSharp.gatsbyImageData);

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
        
            <GatsbyImage image={imageData} alt="CV Maker" className="img"/>
         
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
  query Banner {
    file(relativePath: { eq: "cvMaker.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
