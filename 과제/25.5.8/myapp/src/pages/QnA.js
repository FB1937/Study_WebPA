// src/pages/QnA.js
import React, { useState } from 'react';

function QnA({ user }) {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            author: 'user1@example.com',
            content: '이 프로젝트에서 Firebase를 어떻게 연동하나요?',
            timestamp: '2025-05-21 14:30',
            answer: '',
        },
        {
            id: 2,
            author: 'user2@example.com',
            content: 'React Router에서 보호된 라우트는 어떻게 설정하나요?',
            timestamp: '2025-05-21 15:10',
            answer: '',
        },
    ]);

    const [newQuestion, setNewQuestion] = useState('');
    const [editId, setEditId] = useState(null);
    const [editContent, setEditContent] = useState('');
    const [answers, setAnswers] = useState({});

    const handleAddQuestion = () => {
        if (!newQuestion.trim()) return;

        const newEntry = {
            id: Date.now(),
            author: user.email,
            content: newQuestion,
            timestamp: new Date().toLocaleString(),
            answer: '',
        };

        setQuestions((prev) => [newEntry, ...prev]);
        setNewQuestion('');
    };

    const handleEdit = (id, content) => {
        setEditId(id);
        setEditContent(content);
    };

    const handleEditSave = () => {
        setQuestions((prev) =>
            prev.map((q) =>
                q.id === editId ? { ...q, content: editContent } : q
            )
        );
        setEditId(null);
        setEditContent('');
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
        if (confirmDelete) {
            setQuestions((prev) => prev.filter((q) => q.id !== id));
        }
    };

    const handleAnswer = (id, text) => {
        if (!text.trim()) {
            alert('내용을 적어주세요!');
            return;
        }

        setQuestions((prev) =>
            prev.map((q) =>
                q.id === id ? { ...q, answer: text } : q
            )
        );
        setAnswers((prev) => ({ ...prev, [id]: '' }));
    };

    return (
        <div>
            <h2>Q&A 게시판</h2>

            {user && (
                <div style={{ marginBottom: '20px' }}>
                    <textarea
                        placeholder="질문을 입력하세요"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        rows="3"
                        style={{ width: '100%', marginBottom: '10px' }}
                    />
                    <br />
                    <button onClick={handleAddQuestion}>질문 등록</button>
                </div>
            )}

            {!user && (
                <p style={{ color: 'gray' }}>로그인해야 질문을 작성할 수 있습니다.</p>
            )}

            {questions.map((q) => (
                <div
                    key={q.id}
                    style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}
                >
                    <p><strong>작성자:</strong> {q.author}</p>
                    <p><small>{q.timestamp}</small></p>

                    {editId === q.id ? (
                        <>
                            <textarea
                                value={editContent}
                                onChange={(e) => setEditContent(e.target.value)}
                                rows="3"
                                style={{ width: '100%' }}
                            />
                            <br />
                            <button onClick={handleEditSave}>저장</button>
                        </>
                    ) : (
                        <p><strong>내용:</strong> {q.content}</p>
                    )}

                    {user?.email === q.author && editId !== q.id && (
                        <>
                            <button onClick={() => handleEdit(q.id, q.content)}>수정</button>
                            <button onClick={() => handleDelete(q.id)} style={{ marginLeft: '8px' }}>삭제</button>
                        </>
                    )}

                    <div style={{ marginTop: '10px', borderTop: '1px solid #ddd', paddingTop: '10px' }}>
                        <strong>답변:</strong>
                        {q.answer ? (
                            <p>{q.answer}</p>
                        ) : (
                            user && (
                                <>
                                    <input
                                        type="text"
                                        value={answers[q.id] || ''}
                                        onChange={(e) =>
                                            setAnswers({ ...answers, [q.id]: e.target.value })
                                        }
                                        placeholder="답변을 입력하세요"
                                        style={{ width: '80%' }}
                                    />
                                    <button
                                        onClick={() => handleAnswer(q.id, answers[q.id] || '')}
                                        style={{ marginLeft: '5px' }}
                                    >
                                        등록
                                    </button>
                                </>
                            )
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default QnA;
