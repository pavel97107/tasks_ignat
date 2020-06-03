import React, {useState} from 'react';
import s from './App.module.css';
import Content from "./components/contentBlock/Content";
import FilterTask from "./components/filterTask/FilterTask";

export type stateType = {
    title: string,
    id: number,
    completed: boolean
}
export type filterType = 'React' | 'Redux' | 'JavaScript' | 'All';

function App() {
    const [task, setTask] = useState([
        {title: "React", id: 1, completed: false},
        {title: "Redux", id: 2, completed: false},
        {title: "JavaScript", id: 3, completed: false}
    ])
    const [title, setTitle] = useState('')
    const [filter, setFilter] = useState<filterType>('All')

    function addTask(event: KeyboardEventInit) {
        if(title.length) {
            if (event.key === 'Enter') {
                setTask([
                    ...task, {
                        title: title, id: Date.now(), completed: false
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
                    <FilterTask filterTask={filterTask}/>
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
