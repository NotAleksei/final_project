import React from 'react'
import classes from './UserProfile.module.css'


const UserProfile = props => {


    return (
        <div className={classes.UserProfile}>
            <h1>User name</h1>
            <div>
                <p>Имя: User Name</p>
                <p>Возраст: 32</p>
                <p>Город: Санкт-Петербург</p>
                <p>Телефон: +79215559832</p>
                <p>Email: +79215559832</p>
            </div>
            <button>редактировать профиль</button>
        </div>
    )
}

export default UserProfile