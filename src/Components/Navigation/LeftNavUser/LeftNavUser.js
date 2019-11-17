import React from 'react'
import classes from './LeftNavUser.module.css'


const LeftNavUser = props => {
    
    const links = [
        ['Профиль', 'Profile'],
        ['Услуги', 'Services'],
        ['Статистика', 'Statistic'],
    ]
    

    const renderLinks = () => {
        return (
            links.map((link) => {
                return (
                <li key = {link[1]}>
                    <a onClick={()=>{props.click(link[1])}}>{link[0]}</a>
                </li>
                )
            })
        )
    }


    return (
        <div className={classes.LeftNavUser}>
            <nav>
                <ul>
                    {renderLinks()}
                </ul>
            </nav>
            <img src = {require('../../../img/default-user.jpg')} className={classes.UserImg}/>
        </div>
    )
}

export default LeftNavUser