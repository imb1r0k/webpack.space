import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { decryptData } from '../utils/encryption';
import './Account.css';

const Account = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // Проверка авторизации
    useEffect(() => {
        const encryptedUser = localStorage.getItem('user');
        if (!encryptedUser) {
            navigate('/account'); // Перенаправляем на страницу входа
        } else {
            try {
                const userData = decryptData(encryptedUser); // Дешифруем данные
                console.log('Данные пользователя:', userData); // Отладочное сообщение
                setUser(userData);
            } catch (error) {
                console.error('Ошибка дешифрования:', error.message); // Отладочное сообщение
                localStorage.removeItem('user'); // Удаляем невалидные данные
                navigate('/account'); // Перенаправляем на страницу входа
            } finally {
                setLoading(false);
            }
        }
    }, [navigate]);

    // Функции для навигации
    const goToSettings = () => navigate('/settings');
    const goToVpn = () => navigate('/vpn');
    const goToPayments = () => navigate('/payments');
    const goToBuy = () => navigate('/buy');
    const goToAdmin = () => navigate('/admin');

    if (loading) {
        return <div className="loading">Загрузка...</div>;
    }

    if (!user) {
        return null; // Показываем пустую страницу, пока происходит перенаправление
    }

    return (
        <div className="account">
            <h2>Личный кабинет</h2>
            <p>Добро пожаловать, {user.email}!</p>
            <div className="dashboard">
                <button className="dashboard-button" onClick={goToSettings}>
                    Настройки
                </button>
                <button className="dashboard-button" onClick={goToVpn}>
                    Вкладка VPN
                </button>
                <button className="dashboard-button" onClick={goToPayments}>
                    Вкладка Оплаты
                </button>
                <button className="dashboard-button" onClick={goToBuy}>
                    Купить
                </button>
                {user.isAdmin && ( // Показываем кнопку только для администратора
                    <button className="dashboard-button" onClick={goToAdmin}>
                        Админ-панель
                    </button>
                )}
            </div>
        </div>
    );
};

export default Account;