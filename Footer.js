import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </footer>
  );
}

export default Footer;
