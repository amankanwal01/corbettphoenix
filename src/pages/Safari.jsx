import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import CTASection from '../components/CTASection';

const safariExperiences = [
  {
    id: 1,
    title: 'Jeep Safari',
    description: 'The most popular way to explore Jim Corbett. Open jeeps take you deep into the jungle to spot tigers, elephants, and more.',
    image: 'https://images.unsplash.com/photo-1534171472159-edb6d1e0b63c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Canter Safari',
    description: 'Ideal for larger groups, the canter safari is a great way to explore the Dhikala zone of the national park.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Nature Walk',
    description: 'Guided walking tours along the periphery of the park. Perfect for bird watching and learning about local flora.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Photography Tour',
    description: 'Specialized tours for wildlife photographers with expert guides who know the best spots for sightings.',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800'
  }
];

const Safari = () => {
  return (
    <main>
      <section className="section-padding" style={{ backgroundColor: '#1a2e20', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Safari Adventures</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Embark on a journey into the wild heart of Jim Corbett.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="card-grid">
            {safariExperiences.map(exp => <ExperienceCard key={exp.id} experience={exp} />)}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info-card">
              <h2 style={{ marginBottom: '20px' }}>Safari Booking Info</h2>
              <p style={{ marginBottom: '20px' }}>Safari bookings are subject to availability and government regulations. We recommend booking at least 30-45 days in advance.</p>
              <ul className="footer-links" style={{ opacity: 1 }}>
                <li style={{ marginBottom: '10px' }}>• Morning Session: 6:00 AM - 9:00 AM</li>
                <li style={{ marginBottom: '10px' }}>• Evening Session: 3:00 PM - 6:00 PM</li>
                <li style={{ marginBottom: '10px' }}>• ID Proof required for all members</li>
                <li style={{ marginBottom: '10px' }}>• Permits are non-refundable</li>
              </ul>
            </div>
            
            <div className="booking-form">
              <h3 style={{ marginBottom: '25px', color: 'var(--primary)' }}>Inquiry for Safari</h3>
              <form>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Your Phone" />
                  </div>
                  <div className="form-group">
                    <label>Safari Date</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label>Safari Zone</label>
                    <select>
                      <option>Bijrani</option>
                      <option>Jhirna</option>
                      <option>Dhela</option>
                      <option>Garjiya</option>
                      <option>Dhikala (Canter only)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>No. of Adults</label>
                    <input type="number" min="1" />
                  </div>
                  <div className="form-group">
                    <label>No. of Children</label>
                    <input type="number" min="0" />
                  </div>
                  <div className="form-group full">
                    <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Check Availability</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Safari;
