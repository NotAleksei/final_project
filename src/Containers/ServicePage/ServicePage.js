import React from 'react'
// import classes from './ServiceInfo.module.css'

class ServicePage extends React.Component{

    componentDidMount() {
        console.log(this.props.match.params.id)
    }
    //Страница с услугами одна, кнопка записи, фоточка, верстка. но в зависимости от получаемого ID - можно подгрузить фоточку, наименованеи услуги. (все это хранить в объекте)

    render(){return(
        <div>
            <p>Услуга</p>
        </div>
    )
}
}


export default ServicePage