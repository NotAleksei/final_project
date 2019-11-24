import React from 'react'
import styles from './HomePage.module.css'

const HomePage = () => {
    return(
       <div className={styles.HomePage}>
            <img 
                className={styles.logo}
                src={require('../../img/Logo.png')} alt=''
                >
            </img>
       </div>
    )
}

export default HomePage