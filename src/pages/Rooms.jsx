import React from "react";
import RoomCard from "../components/RoomCard";
import CTASection from "../components/CTASection";

const allRooms = [
  {
    id: 1,
    name: "Deluxe Room",
    description:
      "Perfect for couples, our Deluxe rooms offer a cozy atmosphere with garden views and modern comforts.",
    image: "src/HotelImages/DeluxeRoom.jpeg",
    plans: [
      {
        id: "d1",
        name: "Room Only",
        price: "5,000",
        inclusions: ["Free WiFi", "AC", "TV", "Electric Kettle"],
        cancellation: "Non-Refundable",
      },
      {
        id: "d2",
        name: "Room + Breakfast",
        price: "6,500",
        inclusions: ["Breakfast included", "Free WiFi", "AC", "TV"],
        cancellation: "Free cancellation before 48 hours",
      },
      {
        id: "d3",
        name: "Room + Breakfast + Dinner",
        price: "7,500",
        inclusions: ["Breakfast & Dinner", "Free WiFi", "AC", "TV"],
        cancellation: "Free cancellation before 48 hours",
      },
      {
        id: "d4",
        name: "All Meals Included",
        price: "8,500",
        inclusions: ["Breakfast, Lunch & Dinner", "Free WiFi", "AC", "TV"],
        cancellation: "Free cancellation before 48 hours",
      },
    ],
  },
  {
    id: 2,
    name: "Premium Room",
    description:
      "Experience luxury with our Premium rooms featuring private balconies overlooking the dense Corbett forest.",
    image: "src/HotelImages/PremiumRoom.jpeg",
    plans: [
      {
        id: "p1",
        name: "Room Only",
        price: "7,000",
        inclusions: ["Forest View", "Free WiFi", "AC", "TV"],
        cancellation: "Non-Refundable",
      },
      {
        id: "p2",
        name: "Room + Breakfast",
        price: "8,500",
        inclusions: ["Breakfast included", "Forest View", "Free WiFi"],
        cancellation: "Free cancellation before 48 hours",
      },
      {
        id: "p3",
        name: "Room + Breakfast + Dinner",
        price: "9,500",
        inclusions: ["Breakfast & Dinner", "Forest View", "Free WiFi"],
        cancellation: "Free cancellation before 48 hours",
      },
      {
        id: "p4",
        name: "All Meals Included",
        price: "10,500",
        inclusions: ["Breakfast, Lunch & Dinner", "Forest View", "Free WiFi"],
        cancellation: "Free cancellation before 48 hours",
      },
    ],
  },
  {
    id: 3,
    name: "Luxury Cottage",
    description:
      "Our independent Luxury Cottages provide ultimate privacy with high-end interiors and premium amenities.",
    image: "src/HotelImages/DeluxeRoom.jpeg",
    plans: [
      {
        id: "l1",
        name: "Room Only",
        price: "9,500",
        inclusions: ["Private Cottage", "Free WiFi", "AC", "Mini Bar"],
        cancellation: "Non-Refundable",
      },
      {
        id: "l2",
        name: "Room + Breakfast",
        price: "11,000",
        inclusions: ["Breakfast included", "Private Cottage", "Free WiFi"],
        cancellation: "Free cancellation before 48 hours",
      },
      {
        id: "l3",
        name: "Room + Breakfast + Dinner",
        price: "12,000",
        inclusions: ["Breakfast & Dinner", "Private Cottage", "Free WiFi"],
        cancellation: "Free cancellation before 48 hours",
      },
      {
        id: "l4",
        name: "All Meals Included",
        price: "13,000",
        inclusions: [
          "Breakfast, Lunch & Dinner",
          "Private Cottage",
          "Free WiFi",
        ],
        cancellation: "Free cancellation before 48 hours",
      },
    ],
  },
  {
    id: 4,
    name: "Family Suite",
    description:
      "Ideal for families, these suites offer two interconnected rooms with a common living area and forest view.",
    image: "src/HotelImages/PremiumRoom.jpeg",
    plans: [
      {
        id: "f1",
        name: "Room Only",
        price: "12,000",
        inclusions: ["2 Bedrooms", "Living Area", "Free WiFi", "AC"],
        cancellation: "Non-Refundable",
      },
      {
        id: "f2",
        name: "Room + Breakfast",
        price: "14,000",
        inclusions: ["Breakfast included", "2 Bedrooms", "Living Area"],
        cancellation: "Free cancellation before 48 hours",
      },
      {
        id: "f3",
        name: "Room + Breakfast + Dinner",
        price: "15,500",
        inclusions: ["Breakfast & Dinner", "2 Bedrooms", "Living Area"],
        cancellation: "Free cancellation before 48 hours",
      },
      {
        id: "f4",
        name: "All Meals Included",
        price: "17,000",
        inclusions: ["Breakfast, Lunch & Dinner", "2 Bedrooms", "Living Area"],
        cancellation: "Free cancellation before 48 hours",
      },
    ],
  },
];

const Rooms = () => {
  return (
    <main>
      <section
        className="section-padding"
        style={{
          backgroundColor: "var(--primary)",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: "3.5rem", marginBottom: "20px" }}>
            Our Rooms & Suites
          </h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
            Discover the perfect sanctuary for your wilderness retreat.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="room-list">
            {allRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Rooms;
