import React from 'react'
import {Link} from 'react-router-dom'
import classes from './ServiceInfo.module.css'

const ServiceInfo = props => {


    return(
        <Link to={'/service/' + props.serviceId}>
            <div className={classes.ServiceInfo}>
                <h2>{props.serviceName}</h2>
            </div>
        </Link>
    )
}

export default ServiceInfo