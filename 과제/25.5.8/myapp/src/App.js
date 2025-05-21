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
