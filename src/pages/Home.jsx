import React from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import RoomCard from "../components/RoomCard";
import ExperienceCard from "../components/ExperienceCard";
import Amenities from "../components/Amenities";
import PackageCard from "../components/PackageCard";
import GalleryGrid from "../components/GalleryGrid";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "Spacious room with garden view and modern amenities.",
    image: "/HotelImages/FamilySuite.jpeg",
    price: "4,500",
  },
  {
    id: 2,
    name: "Premium Room",
    description: "Luxury room with private balcony and forest views.",
    image: "/HotelImages/DeluxeRoom.jpeg",
    price: "6,000",
  },
  {
    id: 3,
    name: "Luxury Cottage",
    description: "Independent cottage for ultimate privacy and comfort.",
    image: "/HotelImages/PremiumRoom.jpeg",
    price: "8,500",
  },
];

const experiences = [
  {
    id: 1,
    title: "Jeep Safari",
    description: "Explore the wilderness of Jim Corbett in an open jeep.",
    image:
      "https://images.unsplash.com/photo-1534171472159-edb6d1e0b63c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Bird Watching",
    description: "Discover rare bird species in their natural habitat.",
    image:
      "https://images.unsplash.com/photo-1444464666168-49d633b867ad?auto=format&fit=crop&q=80&w=800",
  },
];

const packages = [
  {
    id: 1,
    title: "2N/3D Wildlife Special",
    inclusions: [
      "Luxury Stay",
      "All Meals Included",
      "1 Jeep Safari",
      "Nature Walk",
    ],
    image:
      "https://images.unsplash.com/photo-1500043356145-5e17a7fe42c5?auto=format&fit=crop&q=80&w=800",
    price: "12,999",
  },
];

const Home = () => {
  return (
    <main>
      <HeroSlider />

      {/* About Section */}
      <section className="section-padding">
        <div className="container">
          <div className="about-section">
            <div className="about-content">
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Welcome to Corbett Phoenix Resort
              </h2>
              <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
                Nestled in the heart of the wilderness, Corbett Phoenix Resort
                is your gateway to the legendary Jim Corbett National Park. We
                offer a perfect blend of luxury, comfort, and nature.
              </p>
              <p style={{ marginBottom: "30px", color: "var(--text-light)" }}>
                Our resort is designed to provide an immersive experience of the
                jungle while ensuring you enjoy the finest hospitality. Whether
                you're here for an adventurous safari or a peaceful retreat, we
                have everything to make your stay memorable.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Learn More
              </Link>
            </div>
            <div className="about-img">
              <img
                src="/HotelImages/WhatsApp Image 2026-03-20 at 11.48.55 AM (2).jpeg"
                alt="Resort View"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section
        className="section-padding"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <h2 className="section-title">Our Luxury Stays</h2>
          <div className="card-grid">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Link to="/rooms" className="btn btn-outline">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Safari Experiences */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Wild Experiences</h2>
          <div className="card-grid">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section
        className="section-padding"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <h2 className="section-title">Resort Amenities</h2>
          <Amenities />
        </div>
      </section>

      {/* Packages Preview */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Exclusive Packages</h2>
          <div className="card-grid">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Link to="/packages" className="btn btn-outline">
              Explore All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section
        className="section-padding"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <h2 className="section-title">Gallery Highlights</h2>
          <GalleryGrid limit={6} />
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Link to="/gallery" className="btn btn-outline">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Nearby Attractions</h2>
          <div className="card-grid">
            <div className="experience-card">
              <img
                src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800"
                alt="Garjiya Devi Temple"
                className="card-img"
              />
              <div className="card-content">
                <h3 className="card-title">Garjiya Devi Temple</h3>
                <p className="card-desc">
                  A famous temple located on a large rock in the Kosi River.
                </p>
              </div>
            </div>
            <div className="experience-card">
              <img
                src="https://images.unsplash.com/photo-1590050752117-23a9d7fc6f9c?auto=format&fit=crop&q=80&w=800"
                alt="Corbett Waterfall"
                className="card-img"
              />
              <div className="card-content">
                <h3 className="card-title">Corbett Waterfall</h3>
                <p className="card-desc">
                  A scenic 60-foot waterfall surrounded by dense teak wood
                  forest.
                </p>
              </div>
            </div>
            <div className="experience-card">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800"
                alt="River Kosi"
                className="card-img"
              />
              <div className="card-content">
                <h3 className="card-title">River Kosi</h3>
                <p className="card-desc">
                  Enjoy the serene views and peaceful atmosphere by the Kosi
                  River.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="section-padding"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <h2 className="section-title">Guest Reviews</h2>
          <Testimonials />
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Home;
