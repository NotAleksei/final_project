import React from 'react'
import UserModal from '../../Components/UserModal/UserModal'
import classes from './UserPage.module.css'

const UserPage = props => {


    return(
        <div>
            <div className={classes.UserPage}>
                 <UserModal/>
            </div>
        </div>
    )
}

export default UserPage