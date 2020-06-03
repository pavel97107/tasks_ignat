import React from 'react';
import s from './ItemTask.module.css'

type elementItemType = {
    name: string
    title: string
    id: number
    removeTask: (id: number) => void
}

function ItemTask({removeTask, title, id, name}: elementItemType) {
    return (
        <div className={s.wrapper1}>
            <div className={s.box}>
                <div className={s.name}><span>{name}</span>
                    <button onClick={() => removeTask(id)} className={s.removeItem}>x</button>
                </div>
                <div className={s.text__info}>
                    {title}
                </div>
                <div className={s.date}>Today</div>
            </div>
        </div>
    );
}

export default ItemTask;
