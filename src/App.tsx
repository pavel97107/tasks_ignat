import React, {useState} from 'react';
import s from './App.module.css';
import Content from "./components/contentBlock/Content";
import Form from "./components/formBlock/Form";


function App() {
    const [task, setTask] = useState([
        {title: "Изучаю Реакт", id: 1, completed: false},
        {title: "Вечером гуляю с собакой", id: 2, completed: false},
        {title: "Люлю смотреть фильмы", id: 3, completed: false}
])


    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.app}>
                    <Content/>
                    <Form/>
                </div>
            </div>
        </div>
    );
}

export default App;
