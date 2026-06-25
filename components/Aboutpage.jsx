import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-container">
      
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Our Space</h1>
        <p>Welcome to our dedicated platform where tech, creativity, and development come together.</p>
      </div>

      {/* Main Content Info */}
      <div className="about-content">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="about-card text-center">
          <h2>What We Share</h2>
          <p>
            From detailed web development tutorials and JavaScript breakdowns to deep-dives into full-stack 
            architecture—this blog is crafted for creators and developers who care about building solid, 
            high-quality digital products.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;