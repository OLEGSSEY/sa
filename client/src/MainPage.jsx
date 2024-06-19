import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from './redux/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import "./MainPage.css";

const MainPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);
    const role = useSelector((state) => state.auth.role);

    const handleLogout = () => {
        dispatch(logOut());
        navigate('/auth'); 
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
            <div className="div1">
                <h2>
                    Наша образовательная платформа
                </h2>
            </div>
            <div className="div2">
                <p>
                    Изучайте все, что связано с нефтегазовой промышленностью, в любое время и в любом месте с помощью наших комплексных курсов.
                </p>
            </div>
            <div className="d2" style={{ marginLeft: "850px", marginTop: "10px" }}>
                <img src="f.png" width="557" height="486" alt="f" style={{ marginLeft: "60px", marginTop:"120px"}}/>
            </div>
        </>
    );
};

export default MainPage;
