import React from 'react';
import PackageCard from '../components/PackageCard';
import CTASection from '../components/CTASection';

const allPackages = [
  {
    id: 1,
    title: '2N/3D Wildlife Special',
    inclusions: ['Luxury Stay', 'All Meals (Breakfast, Lunch, Dinner)', '1 Jeep Safari', 'Nature Walk', 'Evening Bonfire'],
    image: 'https://images.unsplash.com/photo-1500043356145-5e17a7fe42c5?auto=format&fit=crop&q=80&w=800',
    price: '12,999'
  },
  {
    id: 2,
    title: '3N/4D Adventure Retreat',
    inclusions: ['Premium Room Stay', 'All Meals Included', '2 Jeep Safaris', 'Visit to Corbett Waterfall', 'River Crossing Activity'],
    image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80&w=800',
    price: '18,499'
  },
  {
    id: 3,
    title: 'Honeymoon Jungle Bliss',
    inclusions: ['Luxury Cottage Stay', 'Candle Light Dinner', 'Room Decoration', '1 Jeep Safari', 'Spa Session for Couple'],
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=800',
    price: '21,999'
  },
  {
    id: 4,
    title: 'Corporate Team Outing',
    inclusions: ['Group Stay Options', 'Conference Room Access', 'Team Building Activities', 'Gala Dinner with Music', 'Safari for Group'],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    price: 'Call for Quote'
  }
];

const Packages = () => {
  return (
    <main>
      <section className="section-padding" style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Exclusive Packages</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Curated experiences for every type of traveler.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="card-grid">
            {allPackages.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Packages;
