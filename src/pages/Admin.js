import React from 'react';
import BackButton from "../components/BackButton";

const Admin = () => {
    return (
        <div className="page">
            <BackButton/>
            <h1>Админ-панель</h1>
            <p>Управление системой для администраторов.</p>
        </div>
    );
};

export default Admin;