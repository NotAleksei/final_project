import React from 'react'
import Appointment from '../../Components/Form/Appointment/Appointment'
import classes from './ServicePage.module.css'

class ServicePage extends React.Component{
    state = {
        HairCut: ['СТРИЖКА', 'HairCut'],
        Shave: ['БРИТЬЕ', 'Shave'],
        CutAndShave: ['СТРИЖКА И БРИТЬЕ', 'CutAndShave'],
        ShapeUp: ['МОДЕЛИРОВАНИЕ БОРОДЫ', 'ShapeUp'],
        All: ['All', 'All'],
    }

    //Наименование и описание услуги слева. Форма записи справа

    render(){
        const stateName = this.props.match.params.id
        return(
        <div className={classes.ServicePage}>
            <h1>{this.state[stateName][0]}</h1>
            <Appointment/>
        </div>
    )
}
}


export default ServicePage