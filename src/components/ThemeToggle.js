import React from 'react';
import './Header.css'; // Подключаем стили

const ThemeToggle = ({ toggleTheme, theme }) => {
    return (
        <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeToggle;