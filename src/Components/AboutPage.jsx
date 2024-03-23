import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './AboutPage.scss'; // Import your SCSS file for styling

function AboutPage() {
  // Sample data for team members
  const teamMembers = [
    { name: 'John Doe', github: '' },
    { name: 'Jane Smith', github: '' },
    { name: 'Alice Johnson', github: '' },
    { name: 'Bob Williams', github: '' }
  ];

  return (
    <div className="about-page-container">
      <div className="about-content">
        <h1>Meet Our Team</h1>
        <div className="team-members">
          
          <ul>
            {teamMembers.map((member, index) => (
              <li key={index}>
                <a href={member.github} target="_blank" rel="noopener noreferrer">{member.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="back-button">Back</Link>
      </div>
    </div>
  );
}

export default AboutPage;
