import React from 'react'
import classes from './UserEdit.module.css'


const UserEdit = props => {



    return (
        <React.Fragment>
            <h1>User name</h1>
            <div>
                <label>Имя:</label> <input/>
                <label>Возраст:</label> <input/>
                <label>Город:</label> <input/>
                <label>Телефон:</label> <input/>
                <label>Email:</label> <input/>
            </div>
            <button onClick={props.userEditToggle}>Сохранить</button>
        </React.Fragment>
    )
}

export default UserEdit