import "./MainPage.css"
import { Link } from "react-router-dom";


const Techcontrol = () => {
    return (
        <>
            <h2>
            Технология аналитического контроля химических соединений
            </h2>
            <p style={{marginLeft:"350px"}}>
                Все специальности / Технология аналитического контроля химических соединений
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
                            <Link to="/proenglish" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Иностранный язык в проф. деятельности</Link>
                            <Link to="/psyob" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Психология общения</Link>
                        </div>
                    </div>
                </div>
                    
                <div className="diw3">Математический и общий естественнонаучный цикл
                <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/inzhen" style={{borderRadius: "18px"}}>	Математика</Link>
                            <Link to="/metrol" style={{borderRadius: "18px", marginLeft: "5px"}}>Общая и неорганическая химия</Link>
                        </div>
                    </div>
                </div>
                <div className="diw4">Общепрофессиональный цикл
                <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/razgaz" style={{borderRadius: "18px", marginLeft: "5px"}}>Информационные технологии в профессиональной деятельности</Link>
                            <Link to="/exgaz" style={{borderRadius: "18px", marginLeft: "5px"}}>Органическая химия</Link>
                            <Link to="/exgaz" style={{borderRadius: "18px", marginLeft: "5px"}}>Аналитическая химия</Link>
                        </div>
                        <div style={{display: "flex"}}>
                            <Link to="/razgaz" style={{borderRadius: "18px", marginLeft: "5px"}}>Физическая и коллоидная химия</Link>
                            <Link to="/exgaz" style={{borderRadius: "18px", marginLeft: "5px"}}>Основы экономики</Link>
                            <Link to="/exgaz" style={{borderRadius: "18px", marginLeft: "5px"}}>Электротехника и электроника</Link>
                        </div>
                        <div style={{display: "flex"}}>
                            <Link to="/razgaz" style={{borderRadius: "18px", marginLeft: "5px"}}>Метрология, стандартизация и сертификация</Link>
                            <Link to="/exgaz" style={{borderRadius: "18px", marginLeft: "5px"}}>Охрана труда</Link>
                            <Link to="/exgaz" style={{borderRadius: "18px", marginLeft: "5px"}}>Безопасность жизнедеятельности</Link>
                        </div>
                    </div>
                </div>
                <div className="diw5">Профессиональный цикл
                <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/expneft" style={{borderRadius: "18px", marginLeft: "5px"}}>	Основы аналитической химии и физико- химических методов анализа</Link>
                        </div>
                        <div style={{display: "flex"}}>
                        <Link to="/uchprak2" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Учебная практика</Link>
                        </div>
                    </div>
                </div>
                <div className="diw6">Проведение анализов материалов с применением химических методов анализа	
                <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/osnorg" style={{borderRadius: "18px", marginLeft: "5px"}}>	Основы качественного и количественного анализа природных и промышленных материалов</Link>
                        </div>
                        <div style={{display: "flex"}}>
                        <Link to="/uchprak3" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Учебная практика</Link>
                        </div>
                    </div>
                </div>
                <div className="diw7">Организация лабораторно-производственной деятельности
                <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/techis" style={{borderRadius: "18px", marginLeft: "5px"}}>	Организация лабораторно- производственной деятельности	</Link>
                        </div>
                    </div>
                </div>
                <div className="diw8">Выполнение работ по профессии "Лаборант химического анализа"
                <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/caprem" style={{borderRadius: "18px", marginLeft: "5px"}}>	Химическая технология и анализ</Link>
                        </div>
                        <div style={{display: "flex"}}>
                        <Link to="/uchprak5" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Учебная практика</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Techcontrol