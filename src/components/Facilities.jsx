import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faConciergeBell,
  faClock,
  faDumbbell,
  faFire,
  faCar,
  faMountain,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Facilities.css";

const Facilities = () => {
  const facilities = [
    {
      icon: faFire,
      title: "Bonfire Nights",
      description:
        "Enjoy cozy bonfire sessions under the open sky, perfect for relaxing and socializing.",
    },
    {
      icon: faUtensils,
      title: "Meals Included",
      description:
        "Savor freshly prepared veg and non-veg meals included in your camping package.",
    },
    {
      icon: faMountain,
      title: "Trekking Experience",
      description:
        "Explore nearby trails and enjoy guided or self-paced trekking in the scenic mountains.",
    },
    {
      icon: faConciergeBell,
      title: "Camp Assistance",
      description:
        "Our team is available to assist you throughout your stay for a smooth camping experience.",
    },
    {
      icon: faCar,
      title: "Parking",
      description:
        "Safe and convenient parking space available near the campsite.",
    },
    {
      icon: faClock,
      title: "Flexible Check-in",
      description:
        "Easy and flexible check-in process to suit your travel schedule.",
    },
  ];

  return (
    <section id="facilities" className="facilities">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Facilities</span>
          <h2 className="section-title">Everything You Need for a Great Camping Experience</h2>
          <p className="section-description">
            Enjoy essential facilities designed to enhance your trekking and camping stay.
            From bonfire nights to delicious meals and scenic trails, everything is set
            to give you a memorable outdoor experience.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="facility-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="facility-icon">
                <FontAwesomeIcon icon={facility.icon} />
              </div>
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
