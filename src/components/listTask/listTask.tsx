import React from "react";
import {stateProps} from "../contentBlock/Content";
import ItemTask from "../itemTask/ItemTask";
import s from './listTask.module.css'

const ListTask = (props: stateProps) => {
    return (
        <ul className={s.task__container}>
            {props.state.map((element) => {
                return <ItemTask removeTask={props.removeTask} key={element.id} {...element}/>
            })}
        </ul>
    )
}


export default ListTask;