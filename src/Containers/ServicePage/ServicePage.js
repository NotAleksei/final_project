import React from 'react'
import Appointment from '../../Components/Form/Appointment/Appointment'
import classes from './ServicePage.module.css'
import SuccessModal from '../../Components/SuccessModal/SuccessModal'

class ServicePage extends React.Component{
    state = {
        HairCut: ['СТРИЖКА', 'HairCut', '1200р', 'При помощи обширного набора инструментов барбер выполнит стрижку любого вида: Undercut, French Crop, и т.п.'],
        Shave: ['БРИТЬЕ', 'Shave', '1000р', 'Традиционный ритуал бритья опасной бритвой, включающий распаривание, массаж и увлажнение кожи лица'],
        CutAndShave: ['СТРИЖКА И БРИТЬЕ', 'CutAndShave', '1500р', 'Комплекс 2 в 1: Фирменная мужская стрижка + оформление бороды опасной бритвой'],
        ShapeUp: ['МОДЕЛИРОВАНИЕ БОРОДЫ', 'ShapeUp', '700р', 'Борода оформляется машинкой, лицо распаривается горячим полотенцем. Делается контур с помощью шаветки, придаётся форма бороде.'],
        style: ['СТАЙЛИНГ', 'style', '500р', 'Справимся даже с самыми длинными волосами, придав им нужную форму и надежно ее зафиксировав'],
        successModal: false,
    }

    showSuccessModal = () => {
        this.setState({
            successModal: !this.state.successModal
        })
    }



    render(){
        const stateName = this.props.match.params.id
        return(
        <div className={classes.ServicePage}>
            <div className={classes.leftSide}>
                <div className={classes.wrap}>
                    <h1>{this.state[stateName][0]}</h1>
                    <p>{`${this.state[stateName][3]}`}</p>
                    <p>{`цена: ${this.state[stateName][2]}`}</p>
                </div>
            </div>
            <Appointment showSuccessModal={this.showSuccessModal} serviceName = {this.state[stateName][0]}/>
            {this.state.successModal ? <SuccessModal/>  : null}
        </div>
    )
}
}


export default ServicePage