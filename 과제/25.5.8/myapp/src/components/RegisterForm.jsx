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
