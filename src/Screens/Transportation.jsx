import React from "react";
import "../Transportation.css";

const Transportation = () => {
  return (
    <div className="transport-page">
      <section className="transport-hero">
        <h1>Efficient Transportation Services</h1>
        <p>
          We provide safe, affordable, and timely transportation and logistics
          solutions across Nigeria — connecting communities and empowering business.
        </p>
      </section>

      <section className="transport-services">
        <div className="service-card">
          <h3>🚌 Passenger Transport</h3>
          <p>
            Our fleet of modern buses and vans move people comfortably and safely across regions.
          </p>
        </div>
        <div className="service-card">
          <h3>🚛 Goods & Logistics</h3>
          <p>
            From perishables to packages, our logistics service ensures fast, secure delivery nationwide.
          </p>
        </div>
        <div className="service-card">
          <h3>🚐 Charter & Rental</h3>
          <p>
            Need a vehicle for special events or company trips? Our rentals are flexible and affordable.
          </p>
        </div>
      </section>

      <section className="transport-cta">
        <h2>Let's Move Forward Together</h2>
        <p>
          Whether it's moving goods, people, or ideas — SOBOBOG is ready to partner with you.
        </p>
        <button className="cta-button">Contact Transport Team</button>
      </section>
    </div>
  );
};

export default Transportation;
