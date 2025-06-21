import  { useState, useEffect } from "react";
import "./Staffs.css";
import "@fortawesome/fontawesome-free"
const Staffs = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Fade-in effect trigger
  useEffect(() => {
    document.body.classList.add("fade-in");
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div className={`team-page ${darkMode ? "dark" : ""}`}>
      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1>Meet Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="bio">{member.bio}</p>
            <div className="social-icons">
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={member.twitter} target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Ogunmola Olubayo",
    role: "Managing Director",
    bio: "Samuel is a seasoned professional with years of experience in real estate and cooperative development.",
    image: "/man.jpg",
    linkedin: "https://linkedin.com/in/anthony",
    twitter: "https://twitter.com/anthony",
  },
  {
    name: "Augustina Emmanuel",
    role: "Operations Manager",
    bio: "Augustina ensures smooth operations across all departments with her organizational leadership.",
    image: "strong.jpg",
    linkedin: "https://linkedin.com/in/augustina",
    twitter: "https://twitter.com/augustina",
  },
  {
    name: "Augustina Emmanuel",
    role: "Operations Manager",
    bio: "Augustina ensures smooth operations across all departments with her organizational leadership.",
    image: "strong.jpg",
    linkedin: "https://linkedin.com/in/augustina",
    twitter: "https://twitter.com/augustina",
  },
  {
    name: "Augustina Emmanuel",
    role: "Operations Manager",
    bio: "Augustina ensures smooth operations across all departments with her organizational leadership.",
    image: "strong.jpg",
    linkedin: "https://linkedin.com/in/augustina",
    twitter: "https://twitter.com/augustina",
  },
  {
    name: "Augustina Emmanuel",
    role: "Operations Manager",
    bio: "Augustina ensures smooth operations across all departments with her organizational leadership.",
    image: "asian.jpg",
    linkedin: "https://linkedin.com/in/augustina",
    twitter: "https://twitter.com/augustina",
  },
  {
    name: "Augustina Emmanuel",
    role: "Operations Manager",
    bio: "Augustina ensures smooth operations across all departments with her organizational leadership.",
    image: "beautiful.jpg",
    linkedin: "https://linkedin.com/in/augustina",
    twitter: "https://twitter.com/augustina",
  },
];

export default Staffs;
