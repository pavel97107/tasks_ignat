import React from "react";
import s from './Content.module.css'
import ListTask from "../listTask/listTask";
import {stateType} from "../../App";

export type stateProps = {
    state: Array<stateType>,
    removeTask: (id: number) => void
}

const Content = (props: stateProps) => {
    return (
        <section className={s.content}>
            <ListTask removeTask={props.removeTask} state={props.state}/>
        </section>
    )
}

export default Content;