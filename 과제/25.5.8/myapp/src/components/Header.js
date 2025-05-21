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
