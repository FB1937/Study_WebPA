import React from 'react';
import '../styles/style.css';  // CSS 파일을 import

const IntroPage = () => {
    return (
        <div className="container">
            <header>
                <h1>안녕하세요!</h1>
                <p>저는 최대훈 입니다. 프로그래밍을 좋아하는 개발자입니다.</p>
            </header>

            <section className="intro-section">
                <img src="profile.jpg" alt="Profile" /> {/* 수정된 alt 속성 */}
                <p>저는 데이터 관리자(Data Administrator)가 되기 위해 공부 중입니다.</p>
                <p className="info">연락처: choidaehoon0507@gmail.com</p>
                <p className="info">SNS: [Instagram | Twitter | LinkedIn]</p>

                <div className="social-links">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>

                <a href="mailto:your-email@example.com" className="email-button">이메일 보내기</a>
            </section>
        </div>
    );
}

export default IntroPage;
