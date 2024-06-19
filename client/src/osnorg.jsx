import React, { useState, useEffect } from 'react';
import "./MainPage.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Osnorg = () => {


    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState(undefined);
    const [data, setData] = useState([]);
    const [produc, setProduc] = useState([]);
    const role = useSelector((state) => state.auth.role);

    const getReq = () => {
        fetch("http://localhost:3000/request")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log("Ошибка при загрузке данных ", error));
    }

    useEffect(() => {
        getReq()
    }, []);

    const handleFileChange = (e) => {
        setImage(e.target.files?.[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', desc);
            formData.append('image', image);


            const response = await fetch('http://localhost:3000/newrequest', {
                method: 'POST',
                body: formData,
                mode: 'cors'
            });

            if (response.ok) {
                console.log("Данные успешно отправлены на сервер");
                setTitle('');
                setDesc('');
                setImage('');

                getReq()
            } else {
                console.log("Ошибка при отправке данных на сервер");
                console.error('Error:', response.status);
                console.error('Error:', response.statusText);
                console.error('Error:', await response.text());
            }
        } catch (error) {
            console.log("Ошибка при отправке данных ", error);
        }
    };


    let [comments, setComments] = useState([]);
    let [form, setForm] = useState({
        name: '',
        comment: ''
    });

    useEffect(() => {
        if (localStorage.getItem('state')) {
            setComments(JSON.parse(localStorage.getItem('state')).comments);
            setForm(JSON.parse(localStorage.getItem('state')).form);
        }
    }, []);

    const addComment = () => {
        setComments([
            ...comments,
            {
                id: comments.length ? comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1, // max id +1
                name: form.name,
                comment: form.comment,
                date: new Date()
            }
        ]);
        setForm({
            name: '',
            comment: ''
        });
        localStorage.setItem('state', JSON.stringify({ comments, form }));
    }

    const removeComment = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
        localStorage.setItem('state', JSON.stringify({ comments, form }));
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }


    return (
        <>
            <h2>
            Основы организации и планирования производственных работ на нефтяных и газовых месторождениях
            </h2>
            <p style={{ marginLeft: "350px" }}>
                Все специальности / Бурение нефтяных и газовых скважин / Основы организации и планирования производственных работ на нефтяных и газовых месторождениях
            </p>
            <div className="div3">
                <Link to="/expgaz">
                    <img src="arrow.png" height="68" width="68" alt="arrow" />
                </Link>
            </div>
            <div>
                <h2 style={{ marginLeft: "108px" }}>Раздел Основы организации и планирования производственных работ на нефтяных и газовых месторождениях</h2>
                <img style={{ marginLeft: "340px" }} src="line.png" alt="line" />
            </div>
            <div>
                {role === "ADMIN" ? (
                    <form className="fo" onSubmit={handleSubmit}>
                        <div style={{
                            display: 'flex',                
                        }}>
                        <div className='fo2'>
                            <input className='title' type="text" placeholder="Заголовок" value={title} onChange={e => setTitle(e.target.value)} />
                            <input className='desc' type="text" placeholder="Описание" value={desc} onChange={e => setDesc(e.target.value)} />
                            <input className='fil' type="file" placeholder="Выбрать файлы" onChange={handleFileChange} />
                                <button className="zadan" type="submit">Добавить задание</button>
                        </div>
                        <div className="App">
                            {comments.map(comment => <div className='CommentSpan' key={comment.id}>
                                <strong>{comment.name}, </strong>
                                <span>{comment.comment}</span>
                                <button className='CommentDel' onClick={removeComment.bind(null, comment.id)}>Удалить комментарий</button>
                            </div>)}
                            <div className='foarea'>
                                <label className='Name'>Имя: <input
                                    className='Name1'
                                    type="text"
                                    value={form.name}
                                    name="name"
                                    onChange={handleChange} /></label>
                                <label className='Comment'>Комментарий: <input
                                    className='Comment1'
                                    name="comment"
                                    value={form.comment}
                                    onChange={handleChange}></input>
                                </label>
                                <button className='BtnComment' onClick={addComment}>Добавить комментарий</button>
                            </div>
                        </div>
                        </div>

                        {data?.map(e => {
                            return <div>
                                <h1>{e.id}</h1>
                                <h1>{e.title}</h1>
                                <p>{e.description}</p>
                                <a href={'http://localhost:3000/' + e.image}>Скачать</a>
                                <button className='delreq' type='button' onClick={() => {
                                    fetch('http://localhost:3000/deleterequest', {
                                        method: 'POST',
                                        mode: 'cors',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            id: e.id
                                        })
                                    })
                                        .then(e => {
                                            getReq()
                                        })
                                }}>Удалить</button>
                            </div>
                        })}

                    </form>

                ) : null}
                {produc}
            </div>
        </>
    );
};

export default Osnorg;