import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCalendarCheck,
  faPlay,
  faStar,
  faMapMarkerAlt,
  faConciergeBell,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Hero.css";
import img1 from '../assets/banner1.avif';
import img2 from '../assets/banner2.jpg';
import img3 from '../assets/banner3.webp';
import img4 from '../assets/banner4.avif';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: img1,
      alt: "banner1",
    },
    {
      image: img2,
      alt: "banner2",
    },
    {
      image: img3,
      alt: "banner3",
    },
    {
      image: img4,
      alt: "banner4",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => {
      if (direction === 1) {
        return (prev + 1) % slides.length;
      } else {
        return prev === 0 ? slides.length - 1 : prev - 1;
      }
    });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // const openBookingModal = () => {
  //   document.getElementById("bookingModal").classList.add("active");
  // };

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.alt} />
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>

      <div className="hero-content">
        <div className="container">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="title-accent">Welcome to</span>
            <span className="title-main">Dhani Trekking Camping </span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Experience the thrill of the mountains at Dhani Trekking Camping, nestled in the scenic landscapes of Uttarakhand. Surrounded by majestic hills and fresh mountain air, enjoy trekking adventures, cozy camping stays, and warm hospitality that brings you closer to nature.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <button className="btn-primary" >
              <FontAwesomeIcon icon={faCalendarCheck} />
              Reserve Your Stay
            </button>
            <button className="btn-secondary" onClick={scrollToAbout}>
              <FontAwesomeIcon icon={faPlay} />
              Discover More
            </button>
          </motion.div>

          {/* <motion.div
            className="hero-features"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="feature-item">
              <FontAwesomeIcon icon={faStar} />
              <span>Luxury</span>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Prime Location</span>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon={faConciergeBell} />
              <span>24/7 Service</span>
            </div>
          </motion.div> */}
        </div>
      </div>

      <div className="hero-controls">
        <button className="hero-prev" onClick={() => changeSlide(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="hero-next" onClick={() => changeSlide(1)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="hero-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
