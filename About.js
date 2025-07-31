import React from 'react';

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>I am a recent computer science graduate with a love for AI automation and cybersecurity. I value continuous learning, collaboration, and creative problem solving.</p>
      <h3>Education</h3>
      <ul>
        <li>B.Tech in Computer Science, XYZ University (2024)</li>
        <li>Intermediate, ABC School (2020)</li>
      </ul>
      <h3>Certifications & Achievements</h3>
      <ul>
        <li>Cybersecurity Essentials – Accemmegrade</li>
        {/* More as needed */}
      </ul>
      {/* Optional testimonials */}
      <h3>Testimonials</h3>
      <blockquote>
        "A fast learner with a dedication to quality." - Professor Jane Doe
      </blockquote>
    </section>
  );
}

export default About;
