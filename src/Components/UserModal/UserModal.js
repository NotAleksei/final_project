import React from 'react'
import LeftNavUser from '../Navigation/LeftNavUser/LeftNavUser'
import UserProfile from '../User/UserProfile/UserProfile'
import UserServices from '../User/UserServices/UserServices'
import classes from './UserModal.module.css'

class UserModal extends React.Component {

    state={
        currentInterface: 'Profile',
    }

    leftNavHandler = (id) => {
        this.setState({
            currentInterface: id,
        })
    }

    render(){
        const userName = localStorage.getItem('logIn');
        const services = JSON.parse(localStorage.getItem(userName))[1]
        return(
            <div className={classes.UserModal}>
                <LeftNavUser click = {this.leftNavHandler}/>
                {this.state.currentInterface === 'Profile'? <UserProfile/> : null}
                {this.state.currentInterface === 'Services'? <UserServices services={services}/> : null}
                {/* {this.state.currentInterface === 'Statistic'? <UserProfile/> : null} */}
            </div>
        )
    }
}

export default UserModal