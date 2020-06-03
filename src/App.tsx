import React, {useState} from 'react';
import s from './App.module.css';
import Content from "./components/contentBlock/Content";
import FilterTask from "./components/filterTask/FilterTask";
import UserName from "./components/userName/UserName";

export type stateType = {
    name: string
    title: string
    id: number
    completed: boolean
}
export type filterType = 'React' | 'Redux' | 'JavaScript' | 'All' | 'DeleteAll';

function App() {
    const [task, setTask] = useState([
        {name: 'Jack', title: "React", id: 1, completed: false},
        {name: 'Jack', title: "Redux", id: 2, completed: false},
        {name: 'Jack', title: "JavaScript", id: 3, completed: false}
    ])
    const [title, setTitle] = useState('')
    const [filter, setFilter] = useState<filterType>('All')
    const [name, setName] = useState('')

    function addTask(event: any) {
        if (title.length & name.length) {
            if (event.key === 'Enter') {
                setTask([
                    ...task, {
                        name: name, title: title, id: Date.now(), completed: false
                    }
                ])
                setTitle('')
            }
        }
    }

    function removeTasks(id: number) {
        let newTask = task.filter((element) => element.id !== id)
        setTask(newTask)
    }

    let taskForTodoList = task;

    function deleteAll(value: number) {
        let newTask = task.filter((element) => element.id === value)
        setTask(newTask)
    }

    if (filter === 'React') {
        taskForTodoList = task.filter((element) => element.title === 'React')
    }
    if (filter === 'Redux') {
        taskForTodoList = task.filter((element) => element.title === 'Redux')
    }
    if (filter === 'JavaScript') {
        taskForTodoList = task.filter((element) => element.title === 'JavaScript')
    }


    function filterTask(value: filterType) {
        setFilter(value)
    }

    return (
        <section className={s.wrapper}>
            <section className={s.app}>
                <Content removeTask={removeTasks} state={taskForTodoList}/>
                <section className={s.form}>
                    <UserName count={task.length} nameUser={name} defaultUserNameCallBack={setName}/>
                    <FilterTask deleteAll={deleteAll} filterTask={filterTask}/>
                    <div className={s.input__block}>
                        <input onKeyPress={addTask} onChange={(e) => setTitle(e.target.value)} className={s.input}
                               type='text'
                               placeholder={'Напишите сообщение...'} value={title}/>
                    </div>
                </section>
            </section>
        </section>

    );
}

export default App;
