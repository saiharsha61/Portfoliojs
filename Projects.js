import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div>
        <h3>Flutter-based Web Page with Chatbot & Gesture Recognition</h3>
        <p>Developed a responsive web page featuring a chatbot and gesture recognition. Achieved a 20% user engagement increase.</p>
        <a href="https://github.com/yourgithub/project1" target="_blank" rel="noopener noreferrer">GitHub Link</a>
        {/* Add screenshots or demo links */}
      </div>
      <div>
        <h3>AI-powered Automation Tool</h3>
        <p>Automated PDF data extraction and streamlined Google Sheets population, improving workflow efficiency.</p>
        <a href="https://github.com/yourgithub/project2" target="_blank" rel="noopener noreferrer">GitHub Link</a>
      </div>
      {/* More projects as needed */}
    </section>
  );
}

export default Projects;
