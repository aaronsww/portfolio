import React, { useState, useEffect, useRef } from "react";
import "../styles.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === items.length) {
      // Quickly transition back to the start without animation
      slideContainerRef.current.style.transition = "none";
      slideContainerRef.current.style.transform = `translateX(0%)`;
      // Force a reflow to apply the changes immediately
      slideContainerRef.current.getBoundingClientRect();
      // Restore the transition
      slideContainerRef.current.style.transition = "";
      setCurrentIndex(0);
    }
  }, [items.length, currentIndex]);

  // Duplicate the entire list of items to create the loop effect
  const loopedItems = [...items, ...items, ...items];

  // Calculate the width of each slide based on the number of items
  const slideWidth = 100 / items.length;

  return (
    <div className="carousel-container">
      <div
        ref={slideContainerRef}
        className="carousel-slide-container"
        style={{
          transform: `translateX(-${
            (currentIndex + items.length) * slideWidth
          }%)`,
        }}
      >
        {loopedItems.map((item, index) => (
          <div
            className="carousel-slide"
            key={index}
            style={{ flexBasis: `${slideWidth}%` }}
          >
            {item.image}
            <div className="carousel-caption">{item.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
