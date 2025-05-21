import React from 'react';

const notices = [
    { id: 1, title: '서버 점검 안내', date: '2025-05-25', content: '5월 25일(월) 02:00~04:00 서버 점검 예정입니다.' },
    { id: 2, title: '새로운 기능 업데이트', date: '2025-05-10', content: 'Q&A 답변 기능 추가 완료되었습니다.' },
];

export default function Notice() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>공지사항</h1>
            {notices.map(notice => (
                <div key={notice.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                    <h3>{notice.title}</h3>
                    <small>{notice.date}</small>
                    <p>{notice.content}</p>
                </div>
            ))}
        </div>
    );
}
