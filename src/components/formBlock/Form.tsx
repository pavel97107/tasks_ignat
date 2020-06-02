import React from "react";
import s from './Form.module.css'

const Form = () => {
    return (
        <section className={s.form}>
            <div className={s.input__block}>
                <input className={s.input} type='text'/>
            </div>
        </section>
    )
}

export default Form;