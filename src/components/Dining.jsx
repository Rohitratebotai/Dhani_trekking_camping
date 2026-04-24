import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faClock,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Dining.css";
import img from '../assets/img_2.jpeg';

const Dining = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="dining" className="dining">
      <div className="container">
        <div className="dining-content">
          <div className="dining-text">
            <span className="section-subtitle">Meals</span>
            <h2 className="section-title">Simple & Wholesome Camping Meals</h2>
            <p>
              Enjoy freshly prepared veg and non-veg meals included in your camping package.
              Cooked with care and served in a natural outdoor setting, our meals add warmth
              and comfort to your overall camping experience.
            </p>

            <div className="dining-features">
              <div className="feature">
                <FontAwesomeIcon icon={faUtensils} />
                <span>Veg & Non-Veg Meals</span>
              </div>
              <div className="feature">
                <FontAwesomeIcon icon={faClock} />
                <span>Fixed Meal Timings</span>
              </div>
              <div className="feature">
                <FontAwesomeIcon icon={faWineGlass} />
                <span>Bonfire Evenings</span>
              </div>
            </div>

            <button className="btn-outline" onClick={scrollToContact}>
              Book Your Stay
            </button>
          </div>

          <div className="dining-image">
            <img src={img} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;
