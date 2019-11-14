import React from 'react'
import {Link} from 'react-router-dom'
import classes from './ServiceInfo.module.css'

const ServiceInfo = props => {


    return(
        <Link to={'/service/' + 1}>
            <div className={classes.ServiceInfo}>
                <p>{props.serviceName}</p>
            </div>
        </Link>
    )
}

export default ServiceInfo