import { useState } from "react";
import "./Projects.css";
import flexifitImg from "C:/portfolio/portfolio/src/components/cd1.jpg";
import bankingImg from "C:/portfolio/portfolio/src/components/bd1.jpeg"; 
import p1 from "C:/portfolio/portfolio/src/components/p1.jpg"; 
import spend from "C:/portfolio/portfolio/src/components/logo.png"

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "SpendWise-Expense Management",
      image: spend,
      description:
        "A Front-End Project on React js that allows user to manage its finances, visualise it and track his expenses",
      techStack: "React",
      role: "Front-end Develpoer",
    },
    {
      id: 2,
      name: "E-commerce website: Flexifit",
      image: flexifitImg,
      description:
        "Developed Flexifit, a sportswear e-commerce platform with dual interfaces for users and admins. The admin side will control the Inventory and User can browse through products filter them on their requirements.",
      techStack: "React, Spring Boot, MySQL, CSS, JavaScript",
      role: "Team Lead, Frontend & Backend Development, API Integration",
    },
    {
      id: 3,
      name: "Online Banking System",
      image: bankingImg,
      description:
        "Developed a banking system that enables users to withdraw, deposit, and transfer money securely.",
      techStack: "React, Java, Spring Boot, MySQL, JWT Authentication",
      role: "Backend Developer, API Design, Security Implementation",
    },
    {
      id: 4,
      name: "Breast tumor Classification using AI/ML",
      image: p1,
      description:
        "Trained AI/ML model on scanning breast tumour pics and classify it as Benign or Malignant",
      techStack: "React, Java, Spring Boot, MySQL, JWT Authentication",
      role: "Backend Developer, API Design, Security Implementation",
    },
    
  ];

  const handleProjectClick = (id) => {
    setActiveProject(id);
  };

  const handleClosePopup = (e) => {
    e.stopPropagation();
    setActiveProject(null);
  };

  return (
    <section id="projects">
      <h2 className="projects-header">Projects</h2>
      <div className="project-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project.id)}
          >
            <img src={project.image} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {activeProject !== null && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-cards" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClosePopup}>×</button>
            <div className="popup-card">
              <h4>Project Details</h4>
              <p>{projects.find(p => p.id === activeProject).description}</p>
            </div>
            <div className="popup-card">
              <h4>Tech Stack</h4>
              <p>{projects.find(p => p.id === activeProject).techStack}</p>
            </div>
            <div className="popup-card">
              <h4>My Role</h4>
              <p>{projects.find(p => p.id === activeProject).role}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
