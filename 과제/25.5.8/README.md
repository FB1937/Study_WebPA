## 프로젝트 파일 구성

```
myapp/                        # React 프로젝트 최상위 폴더
├── public/                  # 정적 파일들 (index.html 등)
├── src/                     # 소스 코드 폴더
│   ├── components/          # 재사용 가능한 UI 컴포넌트들
│   │   ├── Header.jsx       # 상단 메뉴 및 로그인 상태 표시
│   │   ├── Footer.jsx       # 하단 푸터
│   │   ├── LoginForm.jsx    # 로그인 폼
│   │   ├── RegisterForm.jsx # 회원가입 폼
│   │   ├── MainBanner.jsx   # 홈페이지 상단 배너
│   │   └── ContentCard.jsx  # 공지사항, 프로젝트, 뉴스 카드
│   ├── pages/               # 주요 페이지 컴포넌트들
│   │   ├── HomePage.jsx     # 홈페이지 
│   │   ├── Notice.jsx       # 공지 
│   │   ├── Projects.jsx     # 프로젝트
│   │   └── QnA.jsx          # 질문답변 페이지 (로그인 필요)
│   ├── firebase/            # Firebase 설정 및 초기화 파일
│   │   └── firebase.js      # Firebase 앱 초기화 및 인증 관련 코드
│   ├── App.jsx              # 라우팅 및 전역 상태 관리
│   └── index.js             # React 앱 진입점
└── build/                   # `npm run build` 후 생성되는 배포용 정적 파일들
```

---

# components/

## Header.jsx 

```java
import { Link } from 'react-router-dom';

function Header({ user, onLogout }) {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 30px',
            backgroundColor: '#f5f5f5',
            color: '#333',
            borderBottom: '1px solid #ccc',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
        }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#0066cc' }}>
                MySiteLogo
            </div>
            <nav>
                <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li><Link to="/" style={linkStyle}>Home</Link></li>
                    <li><Link to="/qna" style={linkStyle}>Q&A</Link></li>
                    <li><Link to="/projects" style={linkStyle}>내 프로젝트</Link></li>
                    <li><Link to="/notice" style={linkStyle}>공지</Link></li>
                    {user && (
                        <li>
                            <button onClick={onLogout} style={buttonStyle}>로그아웃</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    transition: 'color 0.2s',
};

const buttonStyle = {
    background: 'transparent',
    border: 'none',
    color: '#333',
    cursor: 'pointer',
    fontWeight: '500',
};

export default Header;

```

## Footer.jsx

```java
export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#222', color: '#aaa', padding: '20px', textAlign: 'center' }}>
            <p>문의: contact@mysite.com | 전화: 010-1234-5678</p>
            <p>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: '#aaa', margin: '0 10px' }}>
                    Twitter
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: '#aaa', margin: '0 10px' }}>
                    Facebook
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: '#aaa', margin: '0 10px' }}>
                    GitHub
                </a>
            </p>
            <p>© 2025 MySite. All rights reserved.</p>
        </footer>
    );
}

```

## LoginForm.jsx

```java
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export default function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            onLogin(user); // 부모 컴포넌트로 사용자 정보 전달
        } catch (err) {
            alert('로그인 실패: ' + err.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="비밀번호" />
            <button type="submit">로그인</button>
        </form>
    );
}

```

## RegisterForm.jsx

```java
// RegisterForm.jsx
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('회원가입 성공!');
        } catch (err) {
            alert('회원가입 실패: ' + err.message);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" type="password" />
            <button type="submit">회원가입</button>
        </form>
    );
}

```

## MainBanner.jsx

```java
export default function MainBanner() {
    return (
        <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f0f0f0' }}>
            <h1>Welcome to MySite!</h1>
            <p>여러분을 위한 최고의 웹 프로젝트 공간입니다.</p>
        </section>
    );
}

```

## ContentCard.jsx

```java
export default function ContentCard({ title, items }) {
    return (
        <section style={{ margin: '20px 0' }}>
            <h2>{title}</h2>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {items.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            border: '1px solid #ddd',
                            padding: '15px',
                            flex: '1 1 200px',
                            borderRadius: '6px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

```

---

# pages/

## HomePage.jsx

```java
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

```

## Notice.jsx

```java
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

```

## Projects.jsx

```java
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
```

## QnA.jsx

```
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
```

---

# firebase/

## firebase.jsx

```java
// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "YOUR APIKEY",
    authDomain: "authDomain",
    projectId: "projectId",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId",
    appId: "appId",
    measurementId: "measurementId"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

---

# src/

## App.js

```java
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

import Home from './pages/HomePage';
import QnA from './pages/QnA';

import Projects from './pages/Projects';   // 내 프로젝트 페이지
import Notice from './pages/Notice';       // 공지 페이지

import Header from './components/Header';
import Footer from './components/Footer';

import { auth } from './firebase/firebase'; // Firebase 초기화 파일에서 auth import
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
    setUser(null);
  };

  function ProtectedRoute({ children }) {
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    return children;
  }

  return (
    <Router>
      <Header user={user} onLogout={handleLogout} />

      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/qna"
            element={
              <ProtectedRoute>
                <QnA user={user} />
              </ProtectedRoute>
            }
          />

          <Route path="/projects" element={<Projects />} />
          <Route path="/notice" element={<Notice />} />

          <Route
            path="/login"
            element={
              user ? (
                <Navigate to="/" replace />
              ) : (
                <div>
                  <h2>로그인</h2>
                  <LoginForm />
                  <h2>회원가입</h2>
                  <RegisterForm />
                </div>
              )
            }
          />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
```

## index.js

```java
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
---

# nginx

## nginx.conf

```
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    server {
        listen 8080;
        server_name localhost;  # 또는 yourdomain.com 또는 서버 IP

        # React build된 정적 파일 위치
        root html;
        index index.html;

        # React 라우팅 지원
        location / {
            try_files $uri /index.html;
        }

        # 에러 페이지
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   /usr/share/nginx/html;  # 기본 위치 또는 필요 시 수정
        }
    }
}

```