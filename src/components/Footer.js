import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                © 2025 WP.SPACE. Все права защищены. {' '}
                <p>Все связанные с настоящим доменным именем страницы являются совственностью ©WP.SPACE</p>
                <a href="/privacy-policy">Политика Конфидециальности</a>
            </p>
            <p>
                By ❤️ {' '}
                <a href="https://t.me/imb1r0k">Imbir0k</a>
            </p>
        </footer>
    );
};

export default Footer;