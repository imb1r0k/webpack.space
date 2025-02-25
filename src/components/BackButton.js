import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Импортируем иконку
import './BackButton.css';

const BackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Возврат на предыдущую страницу
    };

    return (
        <button className="back-button" onClick={handleGoBack}>
            <FaArrowLeft /> {/* Используем иконку */}
        </button>
    );
};

export default BackButton;