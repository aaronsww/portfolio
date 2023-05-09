import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles.css";

function Project({ data }) {
  const imageData = getImage(data.node.childImageSharp.gatsbyImageData);
  return (
    <div className="project">
      <GatsbyImage
        image={imageData}
        alt="Desc"
        className="project-img"
      />
      <div className="project-details">
        <h3>{data.title}</h3>
        <p>
          <p>{data.summary}</p>
          <h4>Technologies</h4>
          <div>{data.tech}</div>
        </p>
      </div>
    </div>
  );
}

export default Project;
