
import { Link } from "react-router-dom";
import "./RealEstate.css";

const RealEstate = () => {
  return (
    <div className="real-estate-page">
      {/* Hero Section */}
      <section className="hero-estate">
        <div className="hero-content">
          <h1>Find Your Perfect Property</h1>
          <p>We offer lands, homes, and real estate investment opportunities across Nigeria.</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Sobobog Real Estate?</h2>
        <div className="features">
          <div className="feature">
            <h3>✅ Verified Properties</h3>
            <p>All listings are inspected and approved to ensure legitimacy and value.</p>
          </div>
          <div className="feature">
            <h3>🏘️ Flexible Payment Plans</h3>
            <p>We offer flexible installment options and co-operative assistance.</p>
          </div>
          <div className="feature">
            <h3>📍 Strategic Locations</h3>
            <p>Properties located in fast-developing, high-return areas.</p>
          </div>
        </div>
      </section>

      {/* Property Highlights */}
      <section className="properties">
        <h2>Featured Properties</h2>
        <div className="property-grid">
          <div className="property-card">
            <img src="src/assets/house4.jpg" alt="Lekki Housing" />
            <h3>3-Bedroom Apartment, Lekki</h3>
            <p>₦45M • Secure Estate • Payment Plan Available</p>
          </div>
          <div className="property-card">
            <img src="src/assets/house8.jpg" alt="Abuja Land" />
            <h3>Land Plot, Abuja (Gwarinpa)</h3>
            <p>₦6M • 600sqm • Government Allocation</p>
          </div>
          <div className="property-card">
            <img src="src/assets/house1.jpg" alt="Ibadan Duplex" />
            <h3>4-Bedroom Duplex, Ibadan</h3>
            <p>₦32M • Modern Design • Gated Community</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>🔍 Browse or request available properties.</li>
          <li>📄 Book inspection and verify documents.</li>
          <li>💳 Make payment (full or installment).</li>
          <li>🏠 Take possession with title handover.</li>
        </ol>
      </section>

      {/* Call to Action */}
      <section className="estate-cta">
        <h2>Ready to own your property?</h2>
        <p>Contact us today and start your journey to ownership with peace of mind.</p>
        <Link to={"/Contact"}>
        <button className="cta-button">Talk to an Agent</button>
        </Link>
      </section>
    </div>
  );
};

export default RealEstate;
