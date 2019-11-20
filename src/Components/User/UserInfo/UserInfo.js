import React from 'react'
import classes from './UserInfo.module.css'


const UserInfo = props => {

    const user = props.user

    return (
        <React.Fragment>
            <div>
                <p>Имя: {user.name||null}</p>
                <p>Возраст: {user.age||null}</p>
                <p>Город: {user.city||null}</p>
                <p>Телефон: {user.phone||null}</p>
                <p>Email: {user.email||null}</p>
            </div>
            
            <button onClick={props.userEditToggle}>редактировать профиль</button>
        </React.Fragment>
    )
}

export default UserInfo