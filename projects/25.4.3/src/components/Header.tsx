import './Header.css';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

    return (
        <header className="header">
            <h1>🚀 My Portfolio</h1>
            <DarkModeToggle />
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: { value: '#1a1a2e' } },
                    fpsLimit: 60,
                    particles: {
                        color: { value: '#ffffff' },
                        links: { enable: true, color: '#ffffff', distance: 150 },
                        move: { enable: true, speed: 1 },
                        size: { value: 2 },
                    },
                }}
            />
            <motion.div
                className="title-box"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="glow-text">Hi, I'm 최ㅇㅇ 👋</h1>
                <p className="sub">Creative Frontend Developer</p>
            </motion.div>
        </header>
    );
};

export default Header;
