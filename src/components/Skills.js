import { motion } from 'framer-motion';

const Skills = () => {
  const skills = ['HTML', 'Tailwins' , 'SCSS' , 'Typescript', 'React','Next.s' , 'Trabajo en equipo y colaboración efectiva' ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Habilidades</h2>
      <ul> 
        
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Skills;
