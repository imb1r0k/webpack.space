import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { decryptData } from '../utils/encryption';
import { motion } from 'framer-motion'; // Добавляем анимации

const ProtectedRoute = ({ children }) => {
    const location = useLocation(); // Получаем текущий путь
    const encryptedUser = localStorage.getItem('user');
    let user = null;

    if (encryptedUser) {
        try {
            user = decryptData(encryptedUser); // Дешифруем данные
        } catch (error) {
            console.error('Ошибка дешифрования:', error);
            localStorage.removeItem('user'); // Удаляем невалидные данные
        }
    }

    if (!user) {
        // Сохраняем текущий путь перед перенаправлением на страницу входа
        localStorage.setItem('redirectPath', location.pathname);
        return <Navigate to="/account" />;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default ProtectedRoute;