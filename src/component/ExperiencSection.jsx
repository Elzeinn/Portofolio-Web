import React from 'react';


const ExperienceSection = () => {
  const experiences = [
    {
      position: 'Fivem Developer',
      company: 'Excellent Roleplay',
      duration: 'Desember 2023 - Mei 2024',
      description: ''
    },
    {
      position: 'Fivem Developer',
      company: 'Indovibes Roleplay',
      duration: 'Juni 2024 - September 2024',
      description: ''
    },
    {
      position: 'Fivem Developer',
      company: 'Complex ID',
      duration: 'September 2024 - Present',
      description: ''
    }
  ];

  return (
    <section className="experience-section" id='experience'>
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <h3 className="position">{experience.position}</h3>
            <h4 className="company">{experience.company}</h4>
            <span className="duration">{experience.duration}</span>
            <p className="description">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
