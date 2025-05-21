import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

import MainBanner from '../components/MainBanner';
import ContentCard from '../components/ContentCard';

// 예시 데이터
const notices = [
    { title: '서버 점검 안내', description: '5월 25일(월) 02:00~04:00 점검 예정' },
    { title: '새로운 기능 업데이트', description: 'Q&A 답변 기능 추가 완료' },
];

const projects = [
    { title: 'React 포트폴리오', description: '나의 첫 React 프로젝트입니다.' },
    { title: 'Firebase 로그인 구현', description: 'Firebase 인증 적용 완료' },
];

const news = [
    { title: '웹 개발 트렌드', description: '2025년 주요 웹 기술 전망' },
    { title: 'Nginx 활용법', description: 'React 배포를 위한 Nginx 설정 가이드' },
];

export default function HomePage() {
    const [user, setUser] = useState(null);

    return (
        <div>
            <h1>홈페이지</h1>
            {user ? (
                <p>{user.email}님 환영합니다</p>
            ) : (
                <>
                    <LoginForm onLogin={setUser} />
                    <RegisterForm />
                </>
            )}

            <MainBanner />
            <ContentCard title="공지사항" items={notices} />
            <ContentCard title="내 프로젝트" items={projects} />
            <ContentCard title="최신 뉴스" items={news} />
        </div>
    );
}
