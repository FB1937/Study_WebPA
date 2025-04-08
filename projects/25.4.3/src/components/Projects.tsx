import './Projects.css';
import { motion } from 'framer-motion';
import proj1 from '../assets/project1.png';
import proj2 from '../assets/project2.png';
import proj3 from '../assets/project3.png';

const projectData = [
    {
        title: '포트폴리오 웹사이트',
        image: proj1,
        description: 'React와 TypeScript로 만든 자기소개 페이지',
        link: 'https://github.com/yourname/portfolio',
    },
    {
        title: 'Todo 앱',
        image: proj2,
        description: '할 일 목록 관리 앱 - Zustand 상태관리 사용',
        link: 'https://github.com/yourname/todo-app',
    },
    {
        title: '영화 추천 서비스',
        image: proj3,
        description: 'TMDB API 기반 영화 추천 웹앱',
        link: 'https://github.com/yourname/movie-recommend',
    },
];

const Projects = () => {
    return (
        <section className="projects-section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                💼 My Projects
            </motion.h2>

            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <img src={project.image} alt={project.title} />
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                🔗 GitHub 보기
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
