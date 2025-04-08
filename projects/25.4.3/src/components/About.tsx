import './About.css';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaLightbulb, FaUserAlt } from 'react-icons/fa';

const About = () => {
    const cards = [
        {
            icon: <FaUserAlt size={30} />,
            title: 'Who Am I?',
            desc: '저는 사용자 중심 UI와 인터랙션에 관심이 많은 예비 프론트엔드 개발자입니다.',
        },
        {
            icon: <FaLaptopCode size={30} />,
            title: 'Tech Stack',
            desc: 'React, TypeScript, HTML/CSS, Git, Figma, 그리고 공부 중인 Next.js & Node.js',
        },
        {
            icon: <FaLightbulb size={30} />,
            title: 'My Goal',
            desc: '감성적이고 효율적인 UI를 만들어, 사용자의 “와!”를 이끌어내는 개발자가 되는 것!',
        },
    ];

    return (
        <section className="about-section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                💡 About Me
            </motion.h2>

            <div className="about-cards">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        className="about-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="icon">{card.icon}</div>
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default About;
