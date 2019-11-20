import React from 'react'
import Select from '../../UI/Select/Select'
import classes from './Appointment.module.css'
import { log } from 'util'

class Appointment extends React.Component {

state={
    value: 'time'
}

selectChangeHandler= e =>{
    this.setState({
        value: e.target.value
    })
}


// saveAppointment = () =>{
//     if(localStorage.getItem('logIn')){

//     }
// }


render(){
    return(
        <div className = {classes.Appointment}>
            <div className={classes.inputInfo}>
            <div className = {classes.user}>
                <input placeholder='Имя'></input>
                <input placeholder='Телефон'></input>
            </div>
            <div className = {classes.date}>
                <input type='date'></input>
                <Select
                    value = {this.state.value}
                    onChange={this.selectChangeHandler}
                    options={[
                        {text: '9:00' , value: '9:00'},
                        {text: '10:00' , value: '10:00'},
                        {text: '11:00' , value: '11:00'},
                        {text: '12:00' , value: '12:00'},
                        {text: '13:00' , value: '13:00'},
                        {text: '14:00' , value: '14:00'},
                        {text: '15:00' , value: '15:00'},
                        {text: '16:00' , value: '16:00'},
                        {text: '17:00' , value: '17:00'},
                        {text: '18:00' , value: '18:00'}
                    ]}                    
                />
            </div> 
            </div> 
            <input className = {classes.extra} placeholder='дополнительные пожелания'></input>
            <button>Подтвердить запись</button>
        </div>
    )
}
}

export default Appointment