import { useEffect, useState } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDark);
    }, [isDark]);

    return (
        <button
            className="dark-toggle"
            onClick={() => setIsDark((prev) => !prev)}
        >
            {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
    );
};

export default DarkModeToggle;
