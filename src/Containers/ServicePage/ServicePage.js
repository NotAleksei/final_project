import React from 'react'
import Appointment from '../../Components/Form/Appointment/Appointment'
import classes from './ServicePage.module.css'
import SuccessModal from '../../Components/SuccessModal/SuccessModal'

class ServicePage extends React.Component{
    state = {
        HairCut: ['СТРИЖКА', 'HairCut'],
        Shave: ['БРИТЬЕ', 'Shave'],
        CutAndShave: ['СТРИЖКА И БРИТЬЕ', 'CutAndShave'],
        ShapeUp: ['МОДЕЛИРОВАНИЕ БОРОДЫ', 'ShapeUp'],
        All: ['All', 'All'],
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
            <h1>{this.state[stateName][0]}</h1>
            <Appointment showSuccessModal={this.showSuccessModal} serviceName = {this.state[stateName][0]}/>
            {this.state.successModal ? <SuccessModal/>  : null}
        </div>
    )
}
}


export default ServicePage