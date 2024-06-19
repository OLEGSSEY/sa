import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from './redux/authSlice';
import "./MainPage.css";

const About = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logOut());
    };
    return (
        <>
            <header>
            <img src="oil.png" width="80" height="80" alt="oil" />
                <div className="top-menu">
                    <ul className="menu-main">
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/spet">Специальности</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </ul>
                </div>
                <button className="logout" onClick={handleLogout}>Выйти</button>
            </header>
            <div className="about-content">
                <h2 className="about-title">О нас</h2>
                    <p className="about-description">
                    Мы стремимся обеспечить качественное и доступное образование для всех.
                     Наша команда опытных преподавателей и профессионалов стремится помочь студентам
                     достичь своих академических целей и подготовиться к будущему.
                    </p>
                <img src="g.png" alt="team" className="about-image" />
            </div>
        </>
    );
};

export default About;