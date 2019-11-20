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
        return(
            <div className={classes.UserModal}>
                <LeftNavUser click = {this.leftNavHandler}/>
                {this.state.currentInterface === 'Profile'? <UserProfile/> : null}
                {this.state.currentInterface === 'Services'? <UserServices/> : null}
                {/* {this.state.currentInterface === 'Statistic'? <UserProfile/> : null} */}
            </div>
        )
    }
}

export default UserModal