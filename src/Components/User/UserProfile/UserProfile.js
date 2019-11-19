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
    const userInfo = JSON.parse(localStorage.getItem(userName));
    return (
        <div className={classes.UserProfile}>
            {this.state.userEdit ? <UserEdit user = {userInfo} userEditToggle = {this.userEditToggle}/>:<UserInfo user = {userInfo} userEditToggle = {this.userEditToggle}/>}
        </div>
    )
}
}

export default UserProfile