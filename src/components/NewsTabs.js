import React, { useState } from 'react';
import './NewsTabs.css';

const NewsTabs = () => {
    const [activeTab, setActiveTab] = useState('latest');

    const news = {
        latest: [
            { id: 1, title: 'Выпуск версии 1.0', content: 'Да настанет грядущее... И все такое =) А если серьезно, ' +
                    'вы только посмотрите какую работу мы проделали, чтобы сверстать вам такой красивенький сайт 😘' },
            { id: 2, title: 'Новый ретранслятор!', content: 'Рады объявить о старте первого туннеля на локации Израиль' },
        ],
        popular: [
            { id: 3, title: 'Выпуск версии 1.0', content: 'Да настанет грядущее... И все такое =) А если серьезно, ' +
                    'вы только посмотрите какую работу мы проделали, чтобы сверстать вам такой красивенький сайт 😘' },
            { id: 4, title: 'Новый ретранслятор!', content: 'Рады объявить о старте первого туннеля на локации Израиль' },
        ],
    };

    return (
        <div className="news-tabs">
            <div className="tabs">
                <button
                    className={activeTab === 'latest' ? 'active' : ''}
                    onClick={() => setActiveTab('latest')}
                >
                    Последние
                </button>
                <button
                    className={activeTab === 'popular' ? 'active' : ''}
                    onClick={() => setActiveTab('popular')}
                >
                    Популярные
                </button>
            </div>
            <div className="news-list">
                {news[activeTab].map(item => (
                    <div key={item.id} className="news-item">
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsTabs;