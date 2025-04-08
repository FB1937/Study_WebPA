import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="contact-section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                📬 Contact Me
            </motion.h2>

            <motion.p
                className="contact-subtext"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
            >
                아래 링크를 통해 언제든지 연락 주세요!
            </motion.p>

            <div className="contact-links">
                <motion.a
                    href="mailto:youremail@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                >
                    📧 Email
                </motion.a>

                <motion.a
                    href="https://github.com/yourgithub"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                >
                    💻 GitHub
                </motion.a>

                <motion.a
                    href="https://www.linkedin.com/in/yourlinkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                >
                    🔗 LinkedIn
                </motion.a>

                <motion.a
                    href="https://open.kakao.com/o/somekakaolink"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                >
                    💬 KakaoTalk
                </motion.a>
            </div>
        </section>
    );
};

export default Contact;
