import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { decryptData } from '../utils/encryption';
import './Header.css';

const Header = ({ toggleTheme, theme }) => {
    const navigate = useNavigate();

    // Функция для обработки нажатия на кнопку "Аккаунт"
    const handleAccountClick = () => {
        const encryptedUser = localStorage.getItem('user');
        if (encryptedUser) {
            try {
                const user = decryptData(encryptedUser); // Дешифруем данные
                if (user) {
                    navigate('/dashboard'); // Перенаправляем на страницу аккаунта
                    return;
                }
            } catch (error) {
                console.error('Ошибка дешифрования:', error);
                localStorage.removeItem('user'); // Удаляем невалидные данные
            }
        }
        navigate('/account'); // Перенаправляем на страницу входа
    };

    return (
        <header>
            <nav>
                <div className="nav-center">
                    <Link to="/" className="nav-button">Главная</Link>
                    <Link to="/services" className="nav-button">Сервисы</Link>
                    <button className="nav-button" onClick={handleAccountClick}>
                        Аккаунт
                    </button>
                </div>
            </nav>
            <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        </header>
    );
};

export default Header;