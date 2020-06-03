import React from 'react';
import {filterType} from "../../App";
import s from './FilterTask.module.css';
type filterTaskCallBack = {filterTask: (value: filterType) => void}

const FilterTask = ({filterTask} : filterTaskCallBack ) => {

    return (
        <div className={s.filterTask}>
            <button onClick={(e) => filterTask('React')} className={s.filterTask_button}>React</button>
            <button onClick={(e) => filterTask('Redux')} className={s.filterTask_button}>Redux</button>
            <button onClick={(e) => filterTask('JavaScript')} className={s.filterTask_button}>JavaScript</button>
            <button onClick={(e) => filterTask('All')} className={s.filterTask_button}>All</button>
        </div>
    )
}

export default FilterTask;