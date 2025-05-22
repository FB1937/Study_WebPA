import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';
import {
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    serverTimestamp,
    updateDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore';

function QnA({ user }) {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');
    const [answers, setAnswers] = useState({});
    const [editId, setEditId] = useState(null);
    const [editContent, setEditContent] = useState('');

    // 🔄 실시간 로드
    useEffect(() => {
        const q = query(collection(db, 'questions'), orderBy('timestamp', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setQuestions(data);
        });
        return () => unsubscribe();
    }, []);

    // ➕ 질문 추가
    const handleAddQuestion = async () => {
        if (!newQuestion.trim()) return;

        try {
            await addDoc(collection(db, 'questions'), {
                author: user.email,
                content: newQuestion,
                timestamp: serverTimestamp(),
                answer: '',
            });
            setNewQuestion('');
        } catch (error) {
            console.error('질문 등록 오류:', error);
        }
    };

    // ✏️ 수정 시작
    const handleEdit = (id, content) => {
        setEditId(id);
        setEditContent(content);
    };

    // 💾 수정 저장
    const handleEditSave = async () => {
        try {
            const ref = doc(db, 'questions', editId);
            await updateDoc(ref, { content: editContent });
            setEditId(null);
            setEditContent('');
        } catch (error) {
            console.error('수정 실패:', error);
        }
    };

    // ❌ 삭제
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, 'questions', id));
        } catch (error) {
            console.error('삭제 실패:', error);
        }
    };

    // ✅ 답변 등록
    const handleAnswer = async (id, answerText) => {
        if (!answerText.trim()) {
            alert('답변 내용을 입력해주세요.');
            return;
        }

        try {
            const ref = doc(db, 'questions', id);
            await updateDoc(ref, { answer: answerText });
            setAnswers((prev) => ({ ...prev, [id]: '' }));
        } catch (error) {
            console.error('답변 등록 실패:', error);
        }
    };

    return (
        <div>
            <h2>Q&A 게시판</h2>

            {user ? (
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
            ) : (
                <p style={{ color: 'gray' }}>로그인해야 질문을 작성할 수 있습니다.</p>
            )}

            {questions.map((q) => (
                <div
                    key={q.id}
                    style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}
                >
                    <p><strong>작성자:</strong> {q.author}</p>
                    <p><small>{q.timestamp?.toDate?.().toLocaleString?.() || '시간 없음'}</small></p>

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
                            <button onClick={() => setEditId(null)} style={{ marginLeft: '5px' }}>취소</button>
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
                        ) : user ? (
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
                        ) : (
                            <p style={{ color: 'gray' }}>아직 답변이 없습니다.</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default QnA;
