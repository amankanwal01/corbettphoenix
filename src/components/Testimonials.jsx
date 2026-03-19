import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    text: 'Amazing experience! The resort is beautiful and the staff is very helpful. The safari was the highlight of our trip.',
    rating: 5
  },
  {
    name: 'Priya Verma',
    text: 'Best place for a weekend getaway. The cottages are luxury and the food is delicious. Highly recommended!',
    rating: 5
  },
  {
    name: 'Amit Patel',
    text: 'Wonderful stay near the jungle. Very peaceful and close to nature. Will definitely visit again.',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <div className="card-grid">
      {testimonials.map((item, index) => (
        <div key={index} className="amenity-item" style={{ textAlign: 'left' }}>
          <div style={{ display: 'flex', gap: '2px', marginBottom: '15px', color: '#f1c40f' }}>
            {[...Array(item.rating)].map((_, i) => <Star key={i} size={16} fill="#f1c40f" />)}
          </div>
          <p style={{ fontStyle: 'italic', marginBottom: '20px', color: 'var(--text-light)' }}>"{item.text}"</p>
          <h4 style={{ color: 'var(--primary)' }}>- {item.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
