import React from 'react'
import classes from './ContactsPage.module.css'


const ContactsPage = props => {


    return (
            <div className={classes.ContactsPage}>
                <div className={classes.articles}>
                    <div className={classes.contacts}>
                        <h1>НАШИ КОНТАКТЫ</h1>
                        <p>
                            г. Санкт-Петербург
                        </p>
                        <p>
                            тел: 8(812)505-35-35
                        </p>
                        <p>
                            email: taksebeBarbershop@info.ru
                        </p>
                    </div>
                    <div className={classes.contacts}>
                        <h1>ВРЕМЯ РАБОТЫ</h1>
                        <p>
                            ПН: 9:00 - 18:00
                        </p>
                        <p>
                            ВТ: 9:00 - 18:00
                        </p>
                        <p>
                            СР: 9:00 - 18:00
                        </p>
                        <p>
                            ЧТ: 9:00 - 18:00
                        </p>
                        <p>
                            ПТ: 9:00 - 18:00
                        </p>
                        <p>
                            СБ: 9:00 - 18:00
                        </p>
                        <p>
                            ВС: 9:00 - 18:00
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default ContactsPage