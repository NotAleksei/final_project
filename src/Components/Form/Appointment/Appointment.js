import React from 'react'
import Select from '../../UI/Select/Select'
import classes from './Appointment.module.css'


class Appointment extends React.Component {

state={
    name: '',
    phone:'',
    date: '',
    time: 'time',
}

changeHandler= event =>{
    const name = event.target.name;
    this.setState({
        [name]: event.target.value
    })
}

selectChangeHandler = event =>{
        console.log(event.target.value)
        this.setState({
            time: event.target.value
        })
}


saveAppointment = (e) =>{
    e.preventDefault()
    if(localStorage.getItem('logIn')){
        const userName = localStorage.getItem('logIn');
        let userInfo = JSON.parse(localStorage.getItem(userName))
        userInfo[1].push({
            name: this.state.name,
            phone: this.state.phone,
            date: this.state.date,
            time: this.state.time,
            serviceName: this.props.serviceName,
        })

        localStorage.setItem(userName, JSON.stringify(userInfo))
        this.props.showSuccessModal()
        setTimeout(()=>{this.props.showSuccessModal()},1000)
    } else {
        this.props.showSuccessModal()
        setTimeout(()=>{this.props.showSuccessModal()},1000)
    }
}



render(){
    return(
        <form className = {classes.Appointment}>
            <div className={classes.inputInfo}>
            <div className = {classes.user}>
                <label>Имя:</label>
                <input name ='name' value={this.state.name} onChange={this.changeHandler}></input>
            </div>
            <div className = {classes.user}>
                <label>Телефон:</label>
                <input name ='phone' value={this.state.phone} onChange={this.changeHandler}></input>
            </div>
            <div className = {classes.date}>
                <label>Дата:</label>
                <input name ='date' value={this.state.date} onChange={this.changeHandler} type='date'></input>
            </div>
            <div className = {classes.date}>
                <label>Время:</label>
                <Select
                    value = {this.state.time}
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

            <button onClick={this.saveAppointment}>Подтвердить запись</button>
        </form>

    )
}
}


export default Appointment