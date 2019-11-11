import React from 'react'
import classes from './LeftNav.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'


const LeftNav = props => {
    
    const links = [
        1, 
        2, 
        3
    ]
    
    const cls = [
        classes.LeftNav,
    ]

    const renderLinks = () => {
        return (
            links.map((item, idx) => {
                return (
                <li key = {idx}>
                    <a>{item}</a>
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