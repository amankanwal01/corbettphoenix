import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const slides = [
  {
    id: 1,
    title: "Escape Into Nature",
    subtitle: "Luxury Stay Near Jim Corbett National Park",
  },
  {
    id: 2,
    title: "Experience The Wild",
    subtitle: "Unforgettable Safari Adventures Await",
  },
  {
    id: 3,
    title: "Luxury Meets Wilderness",
    subtitle: "Premium Cottages with Modern Amenities",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const videoSrc = "/HotelImages/herovideo102.mp4";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1 className="hero-title">{slides[current].title}</h1>
            <p className="hero-subtitle">{slides[current].subtitle}</p>
            <div className="hero-btns">
              <Link to="/contact" className="btn btn-primary">
                Book Now
              </Link>
              <Link
                to="/rooms"
                className="btn btn-outline"
                style={{ borderColor: "white", color: "white" }}
              >
                Explore Rooms
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroSlider;
