import React from 'react';
import './About.scss';
import Navigation from '../shared/components/navigation/Navigation';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Navigation />
      <div className="about-container">
        {/* Header Section */}
        <div className="about-header">
          <h1>Hi I'm Kendall</h1>
        </div>

        <div className="about-content">
          {/* Left Column - Photo */}
          <div className="about-photo-section">
            <div className="photo-frame">
              <div className="photo-wrapper">
                <img 
                  src="/path-to-your-photo.jpg" 
                  alt="Kendall" 
                  className="profile-photo"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Bio */}
          <div className="about-bio-section">
            <div className="bio-text">
              <p>
                I'm a designer fueled by travel, creativity, and the occasional fiercely competitive 
                game of Dutch Blitz. I find genuine excitement in creating thoughtful, engaging 
                designs for both <span className="italic">myself</span> and <span className="italic">others</span>. 
                Outside work, you can usually find me spending time with family, enjoying long walks, 
                or hanging out with my dogs!
              </p>
            </div>

            <div className="bio-text">
              <p>
                Design, to me, is about intention. I'm driven by the challenge of creating work 
                that feels considered, honest, and genuinely crafted. Every project is an 
                opportunity to build something that reflects care and meaning — something made 
                with depth, not just decoration.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sections Grid */}
        <div className="about-details-grid">
          {/* Skills & Caliber */}
          <div className="detail-section skills-section">
            <h2>SKILLS & CALIBER</h2>
            
            <div className="software-icons">
              <div className="icon-badge">Ai</div>
              <div className="icon-badge">Ps</div>
              <div className="icon-badge">Id</div>
              <div className="icon-badge">Dw</div>
              <div className="icon-badge">Pr</div>
            </div>

            <div className="traits-list">
              <div className="trait-item">Time Management</div>
              <div className="trait-item">Communication</div>
              <div className="trait-item">Event Planning</div>
              <div className="trait-item">Adaptability</div>
              <div className="trait-item">Intentionality</div>
              <div className="trait-item">Leadership</div>
            </div>
          </div>

          {/* Creative Specialties */}
          <div className="detail-section specialties-section">
            <h2>CREATIVE SPECIALTIES</h2>
            <ul className="specialties-list">
              <li>Brand Identity Design</li>
              <li>Illustration & Visual Concepting</li>
              <li>UI/UX Design</li>
              <li>Packaging & Product Mockups</li>
              <li>Advertising & Promotional Design</li>
            </ul>
          </div>

          {/* Education */}
          <div className="detail-section education-section">
            <h2>EDUCATION</h2>
            <div className="education-timeline">
              <div className="education-item">
                <div className="education-years">2022<br />2024</div>
                <div className="education-details">
                  <div className="school-name">Bethel University</div>
                  <div className="degree">Graphic Design | Art</div>
                  <div className="location">Arden Hills, MN</div>
                </div>
              </div>
              <div className="education-item">
                <div className="education-years">2024<br />2026</div>
                <div className="education-details">
                  <div className="school-name">University of Northwestern</div>
                  <div className="degree">Graphic Design | Art</div>
                  <div className="location">Roseville, MN</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="detail-section interests-section">
            <h2>INTERESTS</h2>
            <div className="interests-grid">
              <div className="interest-item">
                <div className="interest-icon">🌿</div>
                <div className="interest-label">Nature</div>
              </div>
              <div className="interest-item">
                <div className="interest-icon">🤝</div>
                <div className="interest-label">Volunteer</div>
              </div>
              <div className="interest-item">
                <div className="interest-icon">⛳</div>
                <div className="interest-label">Golf</div>
              </div>
              <div className="interest-item">
                <div className="interest-icon">🎵</div>
                <div className="interest-label">Music</div>
              </div>
              <div className="interest-item">
                <div className="interest-icon">✈️</div>
                <div className="interest-label">Travel</div>
              </div>
              <div className="interest-item">
                <div className="interest-icon">📷</div>
                <div className="interest-label">Photography</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
