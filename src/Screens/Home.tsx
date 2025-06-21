import { Link } from "react-router-dom";
import "../Home.css";

const Home = () => (
  <div className="homepage">
    {/* Hero Section */}
    <section className="hero">
      <div className="hero-text">
        <h1>Welcome to SOBOBOG Nigeria Limited</h1>
        <p>
          Your trusted partner in Real Estate, Co-operative Finance, and
          Transportation across Nigeria.
        </p>
        <div className="hero-buttons">
          <Link to="/real-estate">
            <button className="cta-button">Explore Real Estate</button>
          </Link>
          <Link to="/contact">
            <button className="cta-button secondary">Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="hero-image">{/* optional image */}</div>
    </section>

    {/* Sector Highlights */}
    <section className="sectors">
      <div className="sector-card">
        <h2>🏘️ Real Estate</h2>
        <p>Affordable housing, property sales, and facility management.</p>
        <Link to="/real-estate">Learn More →</Link>
      </div>
      <div className="sector-card">
        <h2>🤝 Co-operative</h2>
        <p>Helping members save, borrow, and invest together.</p>
        <Link to="/cooperative">Learn More →</Link>
      </div>
      <div className="sector-card">
        <h2>🚌 Transportation</h2>
        <p>Efficient logistics and people-moving solutions across Nigeria.</p>
        <Link to="/transport">Learn More →</Link>
      </div>
       <div className="sector-card">
        <h2>💧Table Water</h2>
        <p>Efficient logistics and people-moving solutions across Nigeria.</p>
        <Link to="/Water">Learn More →</Link>
      </div>

       <div className="sector-card">
        <h2>🛠️General Contractor</h2>
        <p>Efficient logistics and people-moving solutions across Nigeria.</p>
        <Link to="/G_contractor">Learn More →</Link>
      </div>

      <div className="sector-card">
        <h2>👥 Meet Our Team</h2>
        <p>Efficient logistics and people-moving solutions across Nigeria.</p>
        <Link to="/Staffs">Learn More →</Link>
      </div>
    </section>

    {/* About Us Section */}
    <section className="about">
      <h2>About Us</h2>
      <p>
        Founded with the vision to empower Nigerians economically, SOBOBOG
        Nigeria Limited bridges people with property, opportunity, and
        movement. Our impact cuts across communities through real estate,
        cooperative growth, and safe transportation.
      </p>
    </section>

    {/* Call to Action */}
    <section className="cta">
      <h2>Let’s Build Something Great Together</h2>
      <p>
        Whether you're buying property, joining our co-operative, or moving
        goods — we’re ready to work with you.
      </p>
      <Link to="/joinReg">
        <button className="cta-button">Join Our Co-operative</button>
      </Link>
    </section>
  </div>
);

export default Home;
