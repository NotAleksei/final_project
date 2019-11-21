import React from 'react'
import classes from './SuccessModal.module.css'

const SuccessModal = props => {


    return(
        <div className={classes.SuccessModal}>
            <div className={classes.modal}>
                <h2>Запись успешна!</h2>
            </div>
        </div>

    )
}

export default SuccessModal