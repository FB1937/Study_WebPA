import './Skills.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';

const skills = [
    { name: 'React', level: 85, color: '#61dafb' },
    { name: 'TypeScript', level: 75, color: '#007acc' },
    { name: 'HTML', level: 90, color: '#e34c26' },
    { name: 'CSS', level: 85, color: '#264de4' },
    { name: 'Git', level: 70, color: '#f1502f' },
    { name: 'Figma', level: 65, color: '#a259ff' },
];

const Skills = () => {
    return (
        <section className="skills-section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                🚀 My Skills
            </motion.h2>

            <div className="skills-grid">
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        className="skill-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <CircularProgressbar
                            value={skill.level}
                            text={`${skill.level}%`}
                            styles={buildStyles({
                                pathColor: skill.color,
                                textColor: '#333',
                                trailColor: '#eee',
                            })}
                        />
                        <p>{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
