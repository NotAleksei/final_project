import React from 'react'
import classes from './UserServices.module.css'


const UserServices = props => {
    
    const userName = localStorage.getItem('logIn');
    const services = JSON.parse(localStorage.getItem(userName))[1]

    const renderServices = () => {
        return (
            services.map((item, idx) => {
                return (
                <li key = {idx}>
                    {`${item.serviceName.toLowerCase()} ${item.date} в ${item.time}`}
                </li>
                )
            })
        )
    }

    return (
        <div className={classes.UserServices}>
            <h1>Услуги</h1>
            {services[0]? <ul>{renderServices()}</ul>:<p>Записи нет</p>}
        </div>
    )
}

export default UserServices