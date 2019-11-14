import React from 'react'
import classes from './LeftNav.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import {NavLink} from 'react-router-dom'

const LeftNav = props => {
    
    const links = [
        {to: '/', label: 'HOME', exact: true}, 
        {to: '/about', label: 'ABOUT', exact: false}, 
        {to: '/services', label: 'SERVICES', exact: false},
        {to: '/galery', label: 'GALERY', exact: false},
        {to: '/contacts', label: 'CONTACTS', exact: false},
        // {to: '/auth', label: 'AUTHORIZATION', exact: false},
        // {to: '/user', label: 'USER', exact: false},
    ]
    

    const cls = [
        classes.LeftNav,
    ]

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
            </nav>
           {props.isOpen ? <Backdrop onclick={props.onClose}/>:null}
        </React.Fragment>
    )
}

export default LeftNav