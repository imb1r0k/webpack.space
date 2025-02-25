import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import './Services.css';

const Services = () => {
    const navigate = useNavigate(); // Хук для навигации

    const services = [
        { id: 1, title: 'VPN', description: 'Безопасный и быстрый доступ к интернету', icon: '🔒'},
        { id: 2, title: 'Хостинг', description: 'Надежный хостинг для ваших проектов', icon: '🖥️', path: '/stop' },
        { id: 3, title: 'Облако', description: 'Хранение и синхронизация файлов', icon: '☁️', path: '/stop' },
        { id: 4, title: 'Почта', description: 'Защищенная корпоративная почта', icon: '📧', path: '/stop' },
        { id: 5, title: 'Аналитика', description: 'Мониторинг и аналитика данных', icon: '📊', path: '/stop' },
        { id: 6, title: 'Поддержка', description: 'Круглосуточная техническая поддержка', icon: '🛠️', path: '/stop' },
    ];

    const handleServiceClick = (path) => {
        navigate(path); // Перенаправляем пользователя на выбранную страницу
    };

    return (
        <div className="services-page">
            <h1>Наши сервисы</h1>
            <div className="services-grid">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="service-card"
                        onClick={() => handleServiceClick(service.path)} // Обработка клика
                        role="button" // Добавляем роль для доступности
                        tabIndex={0} // Делаем элемент фокусируемым
                        onKeyPress={(e) => e.key === 'Enter' && handleServiceClick(service.path)} // Обработка нажатия Enter
                    >
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;