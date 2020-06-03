import React from 'react';
import s from './UserName.module.css'

type userNameType = {
    defaultUserNameCallBack: (event: any) => void,
    nameUser: string
    count: number
}
const UserName = ({defaultUserNameCallBack, nameUser, count}: userNameType) => {
    function ShowInfo() {
        alert(`Привет ${nameUser}, чтобы создать таску инпут name должен быть всегда true, также я сделал что пустое сообщение нельзя будет отправить, что касается фильтров, они фильтруют сообщения по ключевым словам, Delete All удаляет все таски, как то так,scroll-ить так же можно, черный бок после кнопки info === колво тасок, я попытался ухватить все задачи которые ты ставил в задаче №2 and №3, и использовать их в этом маленьком app`)
    }

    return (
        <div className={s.user_block}>
            <input className={s.input} type='text'
                   placeholder='Имечко свое впиши Онитян, а потом Жмякни кнопку Info...)'
                   onChange={(event) => {
                       defaultUserNameCallBack(event.target.value)
                   }}/>
            <button className={s.btn} onClick={() => ShowInfo()}>Info</button>
            <span className={s.count}>{count}</span>
        </div>
    )
}
export default UserName;