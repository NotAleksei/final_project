import React from 'react'
import classes from './UserServices.module.css'


class UserServices extends React.Component {
    
    state = {
        service: this.props.services,

    }
 
    renderServices = () => {
        return (
            this.state.service.map((item, idx) => {
                
                return (
                <li key = {idx}>
                    {`${item.serviceName.toLowerCase()} ${item.date} в ${item.time}`}
                    <a 
                        className={classes.button}
                        onClick={()=>this.cancelAppointment(idx)}
                    >
                    отменить
                    </a>
                </li>
                )
            })
        )
    }

    cancelAppointment = (idx) => {
        let newAppontment = this.state.service
        newAppontment.splice(idx, 1)
        
        const userName = localStorage.getItem('logIn');
        let userInfo = JSON.parse(localStorage.getItem(userName))
        userInfo[1] = newAppontment
        localStorage.setItem(userName, JSON.stringify(userInfo))
        this.setState({
            service: newAppontment
        })
    }


render(){
   return (
        <div className={classes.UserServices}>
            <h1>услуги</h1>
            <div className={classes.servicesList}>
                {this.state.service[0]? <ul>{this.renderServices()}</ul>:<p>Записи нет</p>}
            </div>
        </div>
    )
}
}

export default UserServices