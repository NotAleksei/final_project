import React from 'react'
import UserInfo from '../UserInfo/UserInfo'
import UserEdit from '../UserEdit/UserEdit'
import classes from './UserProfile.module.css'


class UserProfile extends React.Component {

    state = {
        userEdit: false
    }

    userEditToggle = () => {
        this.setState({
            userEdit: !this.state.userEdit,
        })
   }
render() {
    const userName = localStorage.getItem('logIn');
    const userInfo = JSON.parse(localStorage.getItem(userName))[0];
    return (
        <div className={classes.UserProfile}>
            <h1>User name</h1>
            {this.state.userEdit ? <UserEdit user = {userInfo} userEditToggle = {this.userEditToggle}  userName = {userName}/>:<UserInfo user = {userInfo} userEditToggle = {this.userEditToggle}/>}
        </div>
    )
}
}

export default UserProfile