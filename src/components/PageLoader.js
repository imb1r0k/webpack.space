import React from 'react';
import { Navigate } from 'react-router-dom'; // Импортируем Navigate
import { motion } from 'framer-motion';

const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem('user');

    if (!user) {
        return <Navigate to="/account" />; // Используем Navigate для перенаправления
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