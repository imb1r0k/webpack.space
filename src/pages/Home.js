import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NewsTabs from '../components/NewsTabs';
import './Home.css';

const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const titleVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const descriptionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="home">
            <div className="hero-section">
                {/* Стикеры на фоне */}
                <div className="sticker sticker-1">🌟</div>
                <div className="sticker sticker-2">🎨</div>
                <div className="sticker sticker-3">🚀</div>
                <div className="sticker sticker-4">💡</div>
                <div className="sticker sticker-5">🌈</div>

                <motion.h1
                    className="home-title"
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    WPN
                </motion.h1>
                <motion.p
                    className="home-description"
                    variants={descriptionVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Свобода - это не просто слово
                </motion.p>
                {!isScrolled && (
                    <motion.div
                        className="scroll-indicator"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                    >
                        Прокрутите вниз
                    </motion.div>
                )}
            </div>
            <div className="news-container">
                <NewsTabs />
            </div>
        </div>
    );
};

export default Home;