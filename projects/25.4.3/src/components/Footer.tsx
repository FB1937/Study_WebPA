import './Footer.css';
import { motion } from 'framer-motion';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <p>✨ Made with React, Framer Motion, and Passion ✨</p>
            <p>© {year} Choid Portfolio. All rights reserved.</p>
        </motion.footer>
    );
};

export default Footer;
