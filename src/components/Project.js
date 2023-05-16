import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles.css";

function Project({ data, index }) {
  const imageData = getImage(data.node.childImageSharp.gatsbyImageData);
  const isEven = index % 2 === 0;

  return (
    <div className="project">
      <GatsbyImage
        image={imageData}
        alt="Desc"
        className={`project-img ${isEven ? "even" : "odd"}`}
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <div className={`project-details ${isEven ? "even" : "odd"}`}>
        <h3>{data.title}</h3>
        <div>
          <p>{data.summary}</p>
          <hr className="separator" />
          <h4>Technologies</h4>
          <div>{data.tech}</div>
        </div>
        <div className="project-links">
          <a href="" className="links-with-arrow">
            Live Preview
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="arrow"
            >
              <path
                fill="#f0f0f0"
                d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4L6.4 18Z"
              />
            </svg>
          </a>
          <a href="" className="project-links links-with-arrow">
            View Code
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="arrow"
            >
              <path
                fill="#f0f0f0"
                d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4L6.4 18Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
