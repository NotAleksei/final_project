import React from 'react'
import classes from './LeftNav.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import {NavLink} from 'react-router-dom'

const LeftNav = props => {
    
    const links = [
        {to: '/', label: 'ГЛАВНАЯ', exact: true}, 
        {to: '/about', label: 'О НАС', exact: false}, 
        {to: '/services', label: 'УСЛУГИ', exact: false},
        {to: '/galery', label: 'ГАЛЕРЕЯ', exact: false},
        {to: '/contacts', label: 'КОНТАКТЫ', exact: false},
        // {to: '/auth', label: 'AUTHORIZATION', exact: false},
        // {to: '/user', label: 'USER', exact: false},
    ]
    

    const cls = [
        classes.LeftNav,
    ]

    const logOut = () => {
        localStorage.removeItem('logIn')
        props.onClose()
    }

    const renderLinks = () => {
        return (
            links.map((item, idx) => {
                return (
                <li key = {idx}>
                    <NavLink
                        to={item.to}
                        exact={item.exact}
                        activeClassName = {classes.active}
                        onClick = {props.onClose}
                    >
                        {item.label}
                    </NavLink>
                </li>
                )
            })
        )
    }

    
    if(!props.isOpen){
        cls.push(classes.closed)
      } 

    return (
        <React.Fragment>
            <nav className= {cls.join(' ')}>
                <ul>
                    {renderLinks()}
                </ul>
                {!localStorage.getItem('logIn') ?
                    <NavLink
                        to='/auth'
                        onClick = {props.onClose}
                        className = {classes.button}
                    >
                        Авторизация
                    </NavLink> :
                        <NavLink
                        to='/auth'
                        onClick = {logOut}
                        className = {classes.button}
                    >
                     Выйти
                    </NavLink>                 
                }
            </nav>
           {props.isOpen ? <Backdrop onclick={props.onClose}/>:null}
        </React.Fragment>
    )
}

export default LeftNav