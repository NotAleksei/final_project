import React from 'react'
import {Route, Redirect}  from 'react-router-dom'
import classes from './Auth.module.css'


class Auth extends React.Component {

    state = {
        logIn: '',
        password: '',
        loggedIn: false,
        isLoginValid: false,
    }

    loginHandler = () => {

        if(JSON.parse(localStorage.getItem(this.state.logIn)) && JSON.parse(localStorage.getItem(this.state.logIn))[0].pass === this.state.password){
            localStorage.setItem('logIn', this.state.logIn)
            this.setState({
                loggedIn: true,
            })
        } else {
            alert('неверный логин/пароль')
        }
    }

    registerHandler = () => {
        if(this.state.logIn===''||this.state.password===''){
            this.setState({
                isLoginValid: true,
            })
        } else if (localStorage.getItem(this.state.logIn)){
            alert('такой аккаунт уже есть')
            this.setState({
                isLoginValid: false,
                isPasswordValid: false,
            })
        } else {
            let newUser = [];
            let userInfo = {
                pass: this.state.password,
                name: '',
                age: '',
                city: '',
                phone: '',
                email: '',
            }
            newUser[0] = userInfo
            newUser[1] = []
            localStorage.setItem(this.state.logIn, JSON.stringify(newUser))
            localStorage.setItem('logIn', this.state.logIn)
            this.setState({
                loggedIn: true,
            })

        }
    }   

    changeHandler = (event) =>{
        const name = event.target.name;
        this.setState({
            [name]: event.target.value,
            isLoginValid: false,
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
    }
    render(){

        return (
            <div className={classes.Auth}>
                <Route>
                    {this.state.loggedIn ? <Redirect to="/user" /> : null}
                </Route>
                <div className={classes.AuthForm}>
                    <h1>Авторизация</h1>

                    <form onSubmit = {this.submitHandler}>
                        <div>
                            <label>Логин</label>
                            <input name ='logIn' value={this.state.logIn} onChange={this.changeHandler}></input>
                            <div className={classes.error}>
                                {this.state.isLoginValid && !this.state.logIn ? <span>поле не может быть пустым</span>:null}
                            </div>
                        </div>
                        <div>
                            <label>Пароль</label>
                            <input name ='password' value={this.state.password} onChange={this.changeHandler}></input>
                            <div className={classes.error}>
                                {this.state.isLoginValid && !this.state.password ?<span>поле не может быть пустым</span>:null}
                            </div>
                        </div>
                        <div className={classes.BtnWrap}>
                            
                            <a
                                className={classes.button}
                                onClick = {this.loginHandler}
                            >
                                войти
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