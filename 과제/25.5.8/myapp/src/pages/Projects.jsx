import React from 'react';

const projectList = [
    { id: 1, title: 'React 포트폴리오', description: '나의 첫 React 프로젝트입니다.' },
    { id: 2, title: 'Firebase 로그인 구현', description: 'Firebase 인증 적용 완료' },
    { id: 3, title: 'Nginx 배포 자동화', description: 'React 앱 Nginx로 배포하는 자동화 스크립트' },
];

export default function Projects() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>내 프로젝트</h1>
            <ul>
                {projectList.map(proj => (
                    <li key={proj.id} style={{ marginBottom: '15px' }}>
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
