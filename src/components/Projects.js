import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects">

      <h2>Projects</h2>

      {/* Project 1 */}
      <div className="project-card">

        <h3>Vehicle Route Optimization using Graph Neural Networks</h3>

        <p>
          Developed a dynamic vehicle routing system similar to Google Maps
          that analyzes traffic patterns and suggests optimized travel paths
          using Graph Neural Networks.
        </p>

        <ul>
          <li>Constructed road network graphs using NetworkX.</li>
          <li>Implemented traffic-aware routing algorithms.</li>
          <li>Trained models using TensorFlow for path prediction.</li>
          <li>Applied data preprocessing pipelines for real-time datasets.</li>
          <li>Improved route efficiency using graph-based learning models.</li>
        </ul>

        <p>
          <strong>Technologies:</strong> Python, TensorFlow, NetworkX, Graph Neural Networks
        </p>

      </div>


      {/* Project 2 */}
      <div className="project-card">

        <h3>Blockchain-Based Peer-to-Peer Ride Sharing Application</h3>

        <p>
          Built a decentralized ride-sharing platform where drivers and riders
          interact directly without intermediaries using Ethereum smart contracts.
        </p>

        <ul>
          <li>Developed smart contracts in Solidity for booking and payments.</li>
          <li>Integrated MetaMask wallet authentication.</li>
          <li>Built REST APIs using Node.js and Express.js.</li>
          <li>Designed responsive UI using React.</li>
          <li>Ensured transparency and tamper-proof transactions through blockchain.</li>
        </ul>

        <p>
          <strong>Technologies:</strong> Ethereum, Solidity, Web3.js, React, Node.js
        </p>

      </div>


      {/* Project 3 */}
      <div className="project-card">

        <h3>Cloud-Based Portfolio Deployment using AWS</h3>

        <p>
          Designed and deployed a personal portfolio website using modern
          DevOps practices and AWS cloud infrastructure.
        </p>

        <ul>
          <li>Developed responsive frontend using React.js.</li>
          <li>Configured static website hosting using AWS S3.</li>
          <li>Implemented CDN acceleration using CloudFront.</li>
          <li>Automated deployment using GitHub Actions CI/CD pipeline.</li>
          <li>Configured HTTPS and optimized performance using caching policies.</li>
        </ul>

        <p>
          <strong>Technologies:</strong> React.js, AWS S3, CloudFront, GitHub Actions
        </p>

      </div>

    </section>
  );
};

export default Projects;