import React from 'react';
import BackButton from "../components/BackButton";

const Buy = () => {
    return (
        <div className="page">
            <h1>Купить</h1>
            <BackButton/>
            <p>Выберите подходящий тариф и оплатите подписку.</p>
        </div>
    );
};

export default Buy;