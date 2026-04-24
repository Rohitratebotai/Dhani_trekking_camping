import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Our stay at Dhani Trekking Camping was an amazing experience. The tents were clean and comfortable, and the bonfire at night made it even more special. The hosts were very friendly and helpful.",
      author: "Rahul Sharma",
      designation: "Adventure Traveler",
    },
    {
      text: "A perfect place to enjoy nature and take a break from city life. The trekking trails and fresh mountain air made our trip unforgettable. The food was simple and really satisfying.",
      author: "Priya Verma",
      designation: "Group Traveler",
    },
    {
      text: "Loved the entire camping experience! Sleeping under the stars, bonfire evenings, and peaceful surroundings made it worth it. Highly recommended for anyone who loves the outdoors.",
      author: "Amit Kapoor",
      designation: "Couple Traveler",
    },
    {
      text: "Great experience overall. The tents were well maintained, and the camp team ensured everything was smooth. Perfect spot for a short adventure getaway.",
      author: "Sneha Joshi",
      designation: "Solo Traveler",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Guest Reviews</span>
          <h2 className="section-title">What Our Guests Say</h2>
        </div>

        <div className="testimonials-slider">
          <div className="testimonial-card">
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>

            <p className="testimonial-text">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="testimonial-author">
              <h4>{testimonials[currentIndex].author}</h4>
              <span>{testimonials[currentIndex].designation}</span>
            </div>
          </div>

          {/* Dots */}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={index === currentIndex ? "dot active" : "dot"}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;