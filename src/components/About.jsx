import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./About.css";
import aboutimg from '../assets/img_5.jpeg';

const About = () => {
  const scrollToRooms = () => {
    document.getElementById("rooms").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Discover Serenity</span>
          <h2 className="section-title">An Adventure Stay to Remember</h2>
          <p className="section-description">
            Dhani Trekking Camping offers a refreshing escape in the scenic landscapes of Uttarakhand. Surrounded by mountains and natural beauty, it’s the perfect place to unwind, explore trekking trails, and reconnect with nature through a peaceful camping experience.
          </p>
        </div>

        <div className="about-content">
          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Your Adventure Base in the Mountains</h3>
              <p>
                At Dhani Trekking Camping, we welcome you with warm hospitality and an immersive outdoor experience. Whether you're planning an adventurous trek or a peaceful escape in the hills, enjoy comfortable camping stays, fresh mountain air, and a natural setting that helps you disconnect and recharge.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <h4>Adventure</h4>
                  <p>Guided Treks</p>
                </div>
                <div className="stat-item">
                  <h4>24/7</h4>
                  <p>Camp Support</p>
                </div>
                <div className="stat-item">
                  <h4>100%</h4>
                  <p>Nature Experience</p>
                </div>
              </div>
              <button className="btn-outline" onClick={scrollToRooms}>
                Explore Camps
              </button>
            </motion.div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={aboutimg} alt=" Dhani Trekking Camping  Mashobra" />
              <div className="image-badge">
                <FontAwesomeIcon icon={faAward} />
                <span>Warm Hospitality</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
