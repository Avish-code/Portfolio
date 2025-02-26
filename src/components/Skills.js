import './Skills.css';
import s1 from 'C:/portfolio/portfolio/src/components/s1.png';
import s2 from 'C:/portfolio/portfolio/src/components/s2.jpg';
import s3 from 'C:/portfolio/portfolio/src/components/s3.jpg';
import s4 from 'C:/portfolio/portfolio/src/components/s4.png';
import s5 from 'C:/portfolio/portfolio/src/components/s5.png';
import s6 from 'c:/portfolio/portfolio/src/components/s6.jpg'
const skillsData = [
  { name: "React", image: s1, rating: 4 },
  { name: "Java", image: s2, rating: 4 },
  { name: "Spring Boot", image: s3, rating: 4 },
  { name: "CSS", image: s4, rating: 3 },
  { name: "MySQL", image: s5, rating: 3 },
  {name: "Bootstrap", image:s6, rating: 3}
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-header">Skills</h2>

      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <p className="skill-name">{skill.name}</p>
            <div className="skill-rating">
              {Array.from({ length: 6 }, (_, i) => (
                <span key={i} className={i < skill.rating ? "star filled" : "star"}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
