import React from 'react';
import { useNavigate } from 'react-router-dom';
import { decryptData } from '../utils/encryption';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    // Получаем данные пользователя
    const encryptedUser = localStorage.getItem('user');
    const user = encryptedUser ? decryptData(encryptedUser) : null;

    // Функции для навигации
    const goToSettings = () => navigate('/settings');
    const goToVpn = () => navigate('/vpn');
    const goToPayments = () => navigate('/payments');
    const goToBuy = () => navigate('/buy');
    const goToAdmin = () => navigate('/admin');

    return (
        <div className="dashboard-page">
            <h2>Личный кабинет</h2>
            <p>Добро пожаловать, {user ? user.email : 'Гость'}!</p>
            <div className="dashboard-buttons">
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
                {user?.isAdmin && ( // Показываем кнопку только для администратора
                    <button className="dashboard-button" onClick={goToAdmin}>
                        Админ-панель
                    </button>
                )}
            </div>
        </div>
    );
};

export default Dashboard;