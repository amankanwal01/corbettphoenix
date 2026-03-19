import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card">
      <img src={experience.image} alt={experience.title} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{experience.title}</h3>
        <p className="card-desc">{experience.description}</p>
        <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>Book Now</Link>
      </div>
    </div>
  );
};

export default ExperienceCard;
