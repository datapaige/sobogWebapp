import { Link } from "react-router-dom";
import "./Cooperative.css";

const Cooperative = () => {
  return (
    <div className="cooperative-page">
      {/* Hero Section */}
      <section className="hero-coop">
        <div className="hero-content">
          <h1>Empowering Financial Freedom</h1>
          <p>
            Join our cooperative society to save, invest, and grow together with
            trusted community support.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="why-join">
        <h2>Why Join SOBOBOG Cooperative?</h2>
        <div className="benefits">
          <div className="benefit">
            <h3>💰 Savings & Loans</h3>
            <p>
              Members enjoy secure savings and access to low-interest loans.
            </p>
          </div>
          <div className="benefit">
            <h3>📈 Investment Opportunities</h3>
            <p>
              Pool resources for real estate, transport, and other profitable
              ventures.
            </p>
          </div>
          <div className="benefit">
            <h3>👥 Community Support</h3>
            <p>
              Grow financially with others who share similar economic goals.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>📝 Complete registration and contribute savings.</li>
          <li>💼 Attend onboarding and join a savings group.</li>
          <li>💳 Request a loan or invest with other members.</li>
          <li>🎯 Enjoy profits and transparent reporting.</li>
        </ol>
      </section>

      {/* Call to Action */}
      <section className="coop-cta">
        <h2>Ready to Build Together?</h2>
        <p>
          Be part of a cooperative that believes in mutual growth and economic
          upliftment.
        </p>
        <Link to="/JoinReg">
  <button className="cta-button">Join the Cooperative</button>
</Link>
      </section>
    </div>
  );
};

export default Cooperative;
