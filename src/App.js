import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import AuthForm from './components/AuthForm';
import Settings from './pages/Settings';
import Vpn from './pages/Vpn';
import Payments from './pages/Payments';
import Buy from './pages/Buy';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import PageLoader from './components/PageLoader';
import './styles.css';

function AppContent() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation(); // Используем useLocation внутри Router

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Функция входа
    const handleLogin = async (email, password) => {
        setIsLoading(true);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'imbir@imbir.ru' && password === 'imbir') {
                    resolve({ email, isAdmin: true }); // Мастер-аккаунт
                } else if (email && password) {
                    resolve({ email, isAdmin: false }); // Обычный пользователь
                } else {
                    reject(new Error('Неверный email или пароль'));
                }
                setIsLoading(false);
            }, 1000);
        });
    };

    // Функция регистрации
    const handleRegister = async (email, password) => {
        setIsLoading(true);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password) {
                    resolve({ email, isAdmin: false }); // Новые пользователи не могут быть админами
                } else {
                    reject(new Error('Заполните все поля'));
                }
                setIsLoading(false);
            }, 1000);
        });
    };

    return (
        <div className={`app ${theme}`}>
            <Header toggleTheme={toggleTheme} theme={theme} />
            <div className="content">
                {isLoading && <PageLoader />}
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route
                            path="/"
                            element={
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Home />
                                </motion.div>
                            }
                        />
                        <Route
                            path="/services"
                            element={
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Services />
                                </motion.div>
                            }
                        />
                        <Route
                            path="/account"
                            element={
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <AuthForm onLogin={handleLogin} onRegister={handleRegister} />
                                </motion.div>
                            }
                        />
                        <Route
                            path="/settings"
                            element={
                                <ProtectedRoute>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Settings />
                                    </motion.div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/vpn"
                            element={
                                <ProtectedRoute>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Vpn />
                                    </motion.div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/payments"
                            element={
                                <ProtectedRoute>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Payments />
                                    </motion.div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/buy"
                            element={
                                <ProtectedRoute>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Buy />
                                    </motion.div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/admin"
                            element={
                                <ProtectedRoute>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Admin />
                                    </motion.div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Dashboard />
                                    </motion.div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/privacy-policy"
                            element={
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <PrivacyPolicy />
                                </motion.div>
                            }
                        />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </AnimatePresence>
            </div>
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={theme}
            />
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;