import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { decryptData, encryptData } from '../utils/encryption'; // Импортируем функции шифрования
import './Settings.css';

const Settings = () => {
    const navigate = useNavigate();

    // Получаем данные пользователя
    const encryptedUser = localStorage.getItem('user');
    const user = encryptedUser ? decryptData(encryptedUser) : null;

    // Состояние для формы
    const [email, setEmail] = useState(user?.email || '');
    const [name, setName] = useState(user?.name || '');
    const [password, setPassword] = useState('');
    const [autoLogoutTime, setAutoLogoutTime] = useState(
        localStorage.getItem('autoLogoutTime') || '30' // Значение по умолчанию: 30 минут
    );

    // Обработчик изменения данных
    const handleSaveChanges = () => {
        const updatedUser = { ...user, email, name };
        if (password) {
            updatedUser.password = password; // Обновляем пароль, если он был изменен
        }

        // Шифруем и сохраняем обновленные данные
        const encryptedUpdatedUser = encryptData(updatedUser);
        localStorage.setItem('user', encryptedUpdatedUser);

        // Сохраняем время автовыхода
        localStorage.setItem('autoLogoutTime', autoLogoutTime);

        alert('Изменения сохранены!');
    };

    // Обработчик выхода из аккаунта
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/account');
    };

    return (
        <div className="settings-page">
            <h2>Настройки аккаунта</h2>

            {/* Форма для изменения данных */}
            <div className="settings-form">
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Имя:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Новый пароль:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Автовыход из аккаунта:</label>
                    <select
                        value={autoLogoutTime}
                        onChange={(e) => setAutoLogoutTime(e.target.value)}
                    >
                        <option value="5">5 минут</option>
                        <option value="15">15 минут</option>
                        <option value="30">30 минут</option>
                        <option value="60">1 час</option>
                    </select>
                </div>
                <button className="save-button" onClick={handleSaveChanges}>
                    Сохранить изменения
                </button>
            </div>

            {/* Кнопка выхода */}
            <button className="logout-button" onClick={handleLogout}>
                Выйти из аккаунта
            </button>
        </div>
    );
};

export default Settings;