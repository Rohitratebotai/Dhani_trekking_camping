import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Gallery.css";
import img1 from '../assets/img_1.jpeg'
import img2 from '../assets/img_2.jpeg'
import img3 from '../assets/img_3.jpeg'
import img4 from '../assets/img_4.jpeg'
import img5 from '../assets/img_5.jpeg'
import img6 from '../assets/img_6.jpeg'
import img7 from '../assets/img_7.jpeg'
import img8 from '../assets/img_8.jpeg'
import img9 from '../assets/img_9.jpeg'
import img10 from '../assets/img_10.jpeg'
import img11 from '../assets/img_11.jpeg'
import img12 from '../assets/img_12.jpeg'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: img1,
      alt: " Exterior",

    },
    {
      src: img2,
      alt: " Interior",
    },
    {
      src: img3,
      alt: " Room",
    },
    {
      src: img4,
      alt: " Facilities",
    },
    {
      src: img5,
      alt: " Suite",
    },
    {
      src: img6,
      alt: " Pool",
    },
    {
      src: img7,
      alt: " Restaurant",
    },
    {
      src: img8,
      alt: " Spa",
    },
    {
      src: img9,
      alt: " Room",
    },
    {
      src: img10,
      alt: " Dining Area",
    },
    {
      src: img11,
      alt: " Lounge",
    },
    {
      src: img12,
      alt: " Garden",
    },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Visual Journey</span>
          <h2 className="section-title"> Gallery</h2>
          <p className="section-description">
            Take a visual tour of our beautiful  and premium amenities.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <FontAwesomeIcon icon={faSearchPlus} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button className="lightbox-close" onClick={closeLightbox}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="lightbox-title">{selectedImage.title}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
