import React from 'react'
import ServiceInfo from '../../Components/UI/ServiceInfo/ServiceInfo'
import classes from './Services.module.css'

class Services extends React.Component {

    state = {
        HairCut: ['СТРИЖКА', 'HairCut'],
        Shave: ['БРИТЬЕ', 'Shave'],
        CutAndShave: ['СТРИЖКА И БРИТЬЕ', 'CutAndShave'],
        ShapeUp: ['МОДЕЛИРОВАНИЕ БОРОДЫ', 'ShapeUp'],
        All: ['All', 'All'],
    }

// Очень быстро появляется темный DIV. скорректируй.
    render(){
    return(
        <div className={classes.Services}>
            <article  className={classes.firstPhoto}>
                <img src={require('../../img/services/1.jpg')} alt=''></img>
                <ServiceInfo serviceName={this.state.HairCut[0]} serviceId={this.state.HairCut[1]}/>
            </article>
            <article  className={classes.secondPhoto}>
                <img src={require('../../img/services/2.jpg')} alt=''></img>
                <ServiceInfo serviceName={this.state.Shave[0]} serviceId={this.state.Shave[1]}/>
            </article>
            <article className={classes.thirdPhoto}>
                <img src={require('../../img/services/3.jpg')} alt=''></img>
                <ServiceInfo serviceName={this.state.CutAndShave[0]} serviceId={this.state.CutAndShave[1]}/>
            </article>
            <article className={classes.forthPhoto}>
                <img src={require('../../img/services/4.jpg')} alt=''></img>
                <ServiceInfo serviceName={this.state.ShapeUp[0]} serviceId={this.state.ShapeUp[1]}/>
            </article>
            <article className={classes.fifthPhoto}>
                <img src={require('../../img/services/5.jpg')} alt=''></img>
                <ServiceInfo serviceName={this.state.All[0]} serviceId={this.state.All[1]}/>
            </article>
        </div>
    )
    }
}




export default Services