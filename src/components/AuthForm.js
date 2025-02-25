import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { encryptData } from '../utils/encryption'; // Импортируем функцию шифрования
import './AuthForm.css';

const AuthForm = ({ onLogin, onRegister }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            let userData;
            if (isLogin) {
                userData = await onLogin(email, password); // Вызываем функцию входа
                toast.success('Вход выполнен успешно!');
            } else {
                userData = await onRegister(email, password); // Вызываем функцию регистрации
                toast.success('Регистрация прошла успешно!');
            }

            // Шифруем данные перед сохранением
            const encryptedUser = encryptData(userData);
            localStorage.setItem('user', encryptedUser);
            console.log('Данные пользователя зашифрованы и сохранены:', userData); // Отладочное сообщение

            // Перенаправляем на /dashboard
            navigate('/dashboard');
        } catch (err) {
            setError(err.message || 'Произошла ошибка');
            toast.error(err.message || 'Произошла ошибка');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-form">
            <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Загрузка...' : isLogin ? 'Войти' : 'Зарегистрироваться'}
                </button>
            </form>
            <p>
                {isLogin ? 'Нет аккаунта? ' : 'Уже есть аккаунт? '}
                <button onClick={() => setIsLogin(!isLogin)} disabled={loading}>
                    {isLogin ? 'Зарегистрироваться' : 'Войти'}
                </button>
            </p>
        </div>
    );
};

export default AuthForm;