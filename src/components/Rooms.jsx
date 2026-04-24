import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faUtensils,
  faUsers,
  faMountain,
  faCampground,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Rooms.css";
import img1 from '../assets/img_3.jpeg';
import img2 from '../assets/img_14.jpeg';
import img3 from '../assets/img_7.jpeg';

const Rooms = () => {
  const rooms = [
    {
      id: "TripleTent",
      title: "3-Person Tent",
      price: "₹1,500 / person",
      image: img1,
      description:
        "Comfortable tent stay ideal for small groups, offering a cozy camping experience in the lap of nature.",
      badge: "Most Booked",
      amenities: [
        { icon: faUsers, label: "3 People" },
        { icon: faFire, label: "Bonfire" },
        { icon: faUtensils, label: "1 Meal (Veg/Non-Veg)" },
        { icon: faCampground, label: "Base Camping" },
      ],
    },
    {
      id: "FamilyTent",
      title: "5-Person Tent",
      price: "₹1,500 / person",
      image: img2,
      description:
        "Spacious tents perfect for families or groups, designed for a fun and shared camping experience.",
      badge: "Best for Groups",
      amenities: [
        { icon: faUsers, label: "5 People" },
        { icon: faFire, label: "Bonfire" },
        { icon: faUtensils, label: "1 Meal Included" },
        { icon: faCampground, label: "Base Camping" },
      ],
    },
    {
      id: "CampOverview",
      title: "Camping Experience",
      price: "₹1,500 / person",
      image: img3,
      description:
        "Enjoy a complete camping experience with bonfire nights, delicious meals, and a peaceful mountain environment.",
      badge: null,
      amenities: [
        { icon: faMountain, label: "Mountain Views" },
        { icon: faFire, label: "Bonfire Nights" },
        { icon: faUtensils, label: "Meals Included" },
        { icon: faCampground, label: "Outdoor Stay" },
      ],
    },
  ];

  return (
    <section id="rooms" className="rooms">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Camping</span>
          <h2 className="section-title">Stay Under the Stars</h2>
          <p className="section-description">
            We offer 15 well-maintained tents with a total capacity of 50 guests,
            including 10 tents for 3 person, and 5 spacious tents for 5 people.
            Enjoy base camping at just ₹1,500 per person, including bonfire,
            delicious veg/non-veg meals, and a complete outdoor experience.
          </p>
        </div>

        <div className="rooms-grid">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              className="room-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="room-image">
                <img src={room.image} alt={room.title} />
                {room.badge && <div className="room-badge">{room.badge}</div>}
              </div>

              <div className="room-content">
                <h3 className="room-title">{room.title}</h3>

                <p className="room-description">{room.description}</p>

                <div className="room-amenities">
                  {room.amenities.map((amenity, i) => (
                    <span key={i}>
                      <FontAwesomeIcon icon={amenity.icon} />
                      {amenity.label}
                    </span>
                  ))}
                </div>

                <div className="room-footer">
                  <div className="room-price">
                    <span className="price">{room.price}</span>
                    <span className="price-note">per person</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;