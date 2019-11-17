import React from 'react'
import classes from './ErrorPage.module.css'


const ErrorPage = props => {

    return (
        <p>404: страница не найдена {props.userName}</p>
    )
}

export default ErrorPage