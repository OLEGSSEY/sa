import "./MainPage.css"
import { Link } from "react-router-dom";


const Expgaz = () => {
    return (
        <>
            <h2>
            Разработка и эксплуатация газовых месторождений
            </h2>
            <p style={{marginLeft:"350px"}}>
                Все специальности / Разработка и эксплуатация газовых месторождений
            </p>
            <div className="div3">
                <Link to = "/spet">
                    <img src="arrow.png" height="68" width="68"/>
                </Link>
            </div>

            <div className="main">
                <div className="diw1">Учебные предметы
                    <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/bjd" style={{borderRadius: "18px"}}>ОБЖ</Link>
                            <Link to="/istoria" style={{borderRadius: "18px", marginLeft: "5px"}}>История</Link>
                            <Link to="/fizika" style={{borderRadius: "18px", marginLeft: "5px"}}>Физика</Link>
                            <Link to="/geogr" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>География</Link>
                        </div>
                        <div style={{display: "flex"}}>
                            <Link to="/liter" style={{borderRadius: "18px", marginTop: "5px", padding: "25px 10px 10px 10px"}}>Литература</Link>
                            <Link to="/english" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Иностранный язык</Link>
                            <Link to="/russn" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Русский язык</Link>
                        </div>
                        <div style={{display: "flex"}}>
                            <Link to="/himia" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Химия</Link>
                            <Link to="/obsh" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Обществознание</Link>
                            <Link to="/inform" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Инофрматика</Link>
                        </div>
                        <div style={{display: "flex"}}>
                            <Link to="/biology" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Биология</Link>
                            <Link to="/fizra" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Физкультура</Link>
                            <Link to="/mathem" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Математика</Link>
                        </div>
                        <div style={{display: "flex"}}>
                        <Link to="/indiv" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Индивидуальный проект</Link>
                        </div>

                    </div>
                </div>
                <div className="diw2">Гуманитарно и социально-экономический цикл
                    <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/istoria" style={{borderRadius: "18px", marginLeft: "5px"}}>История</Link>
                            <Link to="/fizra2" style={{borderRadius: "18px", marginLeft: "5px"}}>Физкультура</Link>
                        </div>
                        <div style={{display: "flex"}}>
                            <Link to="/osnfil" style={{borderRadius: "18px", marginTop: "5px", padding: "25px 10px 10px 10px"}}>Основы философии</Link>
                            <Link to="/english" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Иностранный язык</Link>
                        </div>
                    </div>
                </div>
                    
                <div className="diw3">Общепрофессиональные дисциплины
                <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/inzhen" style={{borderRadius: "18px"}}>Инженерная графика</Link>
                            <Link to="/metrol" style={{borderRadius: "18px", marginLeft: "5px"}}>Метрология, стандартизация и сертификация</Link>
                        </div>
                        <div style={{display: "flex"}}>
                            <Link to="/el" style={{borderRadius: "18px",  padding: "25px 10px 10px 10px"}}>	Электротехника и электроника</Link>
                            <Link to="/mech" style={{borderRadius: "18px",  marginLeft: "5px"}}>Техническая механика</Link>
                            <Link to="/geology" style={{borderRadius: "18px",  marginLeft: "5px"}}>Геология</Link>
                            
                        </div>
                        <div style={{display: "flex"}}>
                            <Link to="/informtech" style={{borderRadius: "18px", marginTop: "5px", padding: "25px 10px 10px 10px"}}>Информационные технологии в профессиональной деятельности</Link>
                            <Link to="/osnekom" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Основы экономики</Link>
                            <Link to="/pravosn" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Правовые основы профессиональной деятельности</Link>
                        </div>
                        <div style={{display: "flex"}}>
                            <Link to="/ohr" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Охрана труда</Link>
                            <Link to="/bzh" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Безопасность жизнедеятельности	</Link>
                        </div>
                    </div>
                </div>
                <div className="diw4">Проведение технологических процессов разработки и эксплуатации нефтяных и газовых месторождений
                <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/razgaz" style={{borderRadius: "18px", marginLeft: "5px"}}>Разработка нефтяных и газовых месторождений</Link>
                            <Link to="/exgaz" style={{borderRadius: "18px", marginLeft: "5px"}}>Эксплуатация нефтяных и газовых месторождений</Link>
                        </div>
                        <div style={{display: "flex"}}>
                        <Link to="/uchprak1" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Учебная практика</Link>
                        </div>
                    </div>
                </div>
                <div className="diw5">Эксплуатация нефтегазового оборудования
                <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/expneft" style={{borderRadius: "18px", marginLeft: "5px"}}>	Эксплуатация нефтегазопромыслового оборудования</Link>
                        </div>
                        <div style={{display: "flex"}}>
                        <Link to="/uchprak2" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Учебная практика</Link>
                        </div>
                    </div>
                </div>
                <div className="diw6">Организация деятельности коллектива исполнителей
                <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/osnorg" style={{borderRadius: "18px", marginLeft: "5px"}}>	Основы организации и планирования производственных работ на нефтяных и газовых месторождениях</Link>
                        </div>
                        <div style={{display: "flex"}}>
                        <Link to="/uchprak3" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Учебная практика</Link>
                        </div>
                    </div>
                </div>
                <div className="diw7">Выполнение работ по одной или нескольким профессиям рабочих, должностям служащих 15832 Оператор по исследованию скважин.
                <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/techis" style={{borderRadius: "18px", marginLeft: "5px"}}>	Техника и технология исследования скважин и пластов.	</Link>
                        </div>
                        <div style={{display: "flex"}}>
                        <Link to="/uchprak4" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Учебная практика</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Expgaz