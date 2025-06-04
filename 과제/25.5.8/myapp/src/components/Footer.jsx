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
