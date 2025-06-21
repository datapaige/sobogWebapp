
import "./Transport.css";

const Transport = () => {
  return (
    <div className="transport-page">
      {/* Hero Section */}
      <section className="hero-transport">
        <div className="hero-content">
          <h1>Seamless Travel, Powered by SOBOBOG</h1>
          <p>
            Comfortable, affordable, and safe transport solutions connecting cities and communities across Nigeria.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="transport-highlights">
        <h2>Why Ride With Us?</h2>
        <div className="transport-features">
          <div className="feature">
            <h3>🚌 Modern Fleet</h3>
            <p>
              Well-maintained buses, vans, and cars for urban and interstate travel.
            </p>
          </div>
          <div className="feature">
            <h3>💺 Comfort & Safety</h3>
            <p>
              Spacious seating, AC-enabled vehicles, and safety-focused drivers.
            </p>
          </div>
          <div className="feature">
            <h3>📍 Routes Nationwide</h3>
            <p>
              Strategic terminals and daily routes between major cities.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="booking-process">
        <h2>How to Book</h2>
        <ol>
          <li>📅 Check schedule and select your route.</li>
          <li>🖊️ Fill in travel details and seat preferences.</li>
          <li>💳 Make payment online or at terminal.</li>
          <li>🧳 Arrive early and enjoy the ride!</li>
        </ol>
      </section>

      {/* CTA */}
      <section className="transport-cta">
        <h2>Book Your Next Journey Today</h2>
        <p>
          From daily commuters to long-distance travelers, we’ve got you covered.
        </p>
        <button className="cta-button">Plan Your Trip</button>
      </section>
    </div>
  );
};

export default Transport;
