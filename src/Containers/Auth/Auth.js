import React from 'react'
import classes from './Auth.module.css'


class Auth extends React.Component {

    state = {
        email: '',
        password: '',
    }

    loginHandler = () => {
        let user = JSON.parse(localStorage.getItem(this.state.email))
        if(user.pass === this.state.password){
            localStorage.setItem('logIn', this.state.email)
        } else {
            alert('неверный логин/пароль')
        }
    }

    registerHandler = () => {
        if (localStorage.getItem(this.state.email)){
            alert('такой аккаунт уже есть')
        } else {
            localStorage.setItem(this.state.email, JSON.stringify({
                pass: this.state.password,
                name: '',
                age: '',
                city: '',
                phone: '',
                email: '',
            })
            )
        }
    }   

    changeHandler = (event) =>{
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }
    submitHandler = (e) => {
        
        e.preventDefault()
    }
    render(){
        return (
            <div className={classes.Auth}>
                <div className={classes.AuthForm}>
                    <h1>Авторизация</h1>

                    <form onSubmit = {this.submitHandler}>
                        <div>
                            <label>Email</label>
                            <input name ='email' value={this.state.email} onChange={this.changeHandler}></input>
                        </div>
                        <div>
                            <label>Пароль</label>
                            <input name ='password' value={this.state.password} onChange={this.changeHandler}></input>
                        </div>
                        <div className={classes.BtnWrap}>
                            <a 
                                className={classes.button}
                                onClick = {this.loginHandler}
                            >
                                Войти
                            </a>
                            <a 
                                className={classes.button}
                                onClick = {this.registerHandler}
                            >
                                Зарегистрироваться
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth