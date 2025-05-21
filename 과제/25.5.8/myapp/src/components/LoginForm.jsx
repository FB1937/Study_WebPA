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
