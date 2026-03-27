import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const slides = [
  {
    id: 1,
    image: "/HotelImages/hotelFront.jpeg",
    title: "Escape Into Nature",
    subtitle: "Luxury Stay Near Jim Corbett National Park",
  },
  {
    id: 2,
    image: "/HotelImages/hotelSunRiseView.jpeg",
    title: "Experience The Wild",
    subtitle: "Unforgettable Safari Adventures Await",
  },
  {
    id: 3,
    image: "/HotelImages/hotelSlideriamge3.jpeg",
    title: "Luxury Meets Wilderness",
    subtitle: "Premium Cottages with Modern Amenities",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="hero-slide active"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >
          <div className="hero-overlay">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
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
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSlider;
