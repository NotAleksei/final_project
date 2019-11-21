import React from 'react'
import classes from './UserEdit.module.css'


class UserEdit extends React.Component {

    state = {
        name: this.props.user.name,
        age: this.props.user.age,
        city: this.props.user.city,
        phone: this.props.user.phone,
        email: this.props.user.email, 
    }

    
    changeHandler = (event) =>{
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    saveProfile = () => {
        let userInfo = JSON.parse(localStorage.getItem(this.props.userName))
        userInfo[0] = {
            pass: this.props.user.pass,
            name: this.state.name,
            age: this.state.age,
            city: this.state.city,
            phone: this.state.phone,
            email: this.state.email,
        }
        localStorage.setItem(this.props.userName, JSON.stringify(userInfo))
        this.props.userEditToggle()
    }

        

render(){

    return (
        <div className={classes.UserEdit}>
    
            <form>
                <div className={classes.inputBlock}>
                    <label>Имя:</label>
                    <input name ='name' value={this.state.name} onChange={this.changeHandler}></input>
                </div>
                <div className={classes.inputBlock}>
                    <label>Возраст</label>
                    <input name ='age' value={this.state.age} onChange={this.changeHandler}></input>
                </div>
                <div className={classes.inputBlock}>
                    <label>Город:</label>
                    <input name ='city' value={this.state.city} onChange={this.changeHandler}></input>
                </div>
                <div className={classes.inputBlock}>
                    <label>Телефон:</label>
                    <input name ='phone' value={this.state.phone} onChange={this.changeHandler}></input>
                </div>
                <div className={classes.inputBlock}>
                    <label>Email:</label>
                    <input name ='email' value={this.state.email} onChange={this.changeHandler}></input>
                </div>
                <button onClick={this.saveProfile}>Сохранить</button>
            </form>
        </div>
    )
}
}

export default UserEdit