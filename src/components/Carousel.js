import React, { useState, useEffect, useRef } from "react";
import "../styles.css";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === children.length) {
      // Quickly transition back to the start without animation
      slideContainerRef.current.style.transition = "none";
      slideContainerRef.current.style.transform = `translateX(0%)`;
      // Force a reflow to apply the changes immediately
      slideContainerRef.current.getBoundingClientRect();
      // Restore the transition
      slideContainerRef.current.style.transition = "";
      setCurrentIndex(0);
    }
  }, [children.length, currentIndex]);

  // Duplicate the entire list of children to create the loop effect
  const loopedChildren = [...children, ...children, ...children];

  // Calculate the width of each slide based on the number of children
  const slideWidth = 100 / children.length;

  return (
    <div className="carousel-container">
      <div
        ref={slideContainerRef}
        className="carousel-slide-container"
        style={{
          transform: `translateX(-${
            (currentIndex + children.length) * slideWidth
          }%)`,
        }}
      >
        {loopedChildren.map((child, index) => (
          <div
            className="carousel-slide"
            key={index}
            style={{ flexBasis: `${slideWidth}%` }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
