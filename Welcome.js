import React from 'react';

function Welcome() {
  return (
    <section className="welcome">
      <img src="/assets/profile.jpg" alt="Profile" className="profile-photo"/>
      <h1>Your Name</h1>
      <h2>AI Automation Engineer & Cybersecurity Enthusiast</h2>
      <p>Recent graduate passionate about AI and cybersecurity, eager to apply technical skills and contribute to innovative teams.</p>
      <div>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
        <a href="/contact">Contact</a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

export default Welcome;
