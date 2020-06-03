import React from 'react';
import {filterType} from "../../App";
import s from './FilterTask.module.css';

type filterTaskCallBack = {
    filterTask: (value: filterType) => void,
    deleteAll: (value: number) => void
}

const FilterTask = ({filterTask, deleteAll}: filterTaskCallBack) => {

    return (
        <div className={s.filterTask}>
            <button onClick={(e) => filterTask('React')} className={s.filterTask_button}>Filter React</button>
            <button onClick={(e) => filterTask('Redux')} className={s.filterTask_button}>Filter Redux</button>
            <button onClick={(e) => filterTask('JavaScript')} className={s.filterTask_button}>Filter JS</button>
            <button onClick={(e) => filterTask('All')} className={s.filterTask_button}>Show All</button>
            <button onClick={(e) => deleteAll(Math.random())} className={`${s.filterTask_button}  ${s.delete}`}>Delete
                All
            </button>
        </div>
    )
}

export default FilterTask;