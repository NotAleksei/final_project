import React from 'react'
import ServiceInfo from '../../Components/UI/ServiceInfo/ServiceInfo'
import classes from './Services.module.css'

class Services extends React.Component {

    state = {
        HairCut: ['СТРИЖКА', 'HairCut'],
        Shave: ['БРИТЬЕ', 'Shave'],
        CutAndShave: ['СТРИЖКА И БРИТЬЕ', 'CutAndShave'],
        ShapeUp: ['МОДЕЛИРОВАНИЕ БОРОДЫ', 'ShapeUp'],
        Style: ['СТАЙЛИНГ', 'style'],
    }

// Очень быстро появляется темный DIV. скорректируй.
    render(){
    return(
        <div className={classes.Services}>
            <article  className={classes.firstPhoto}>
                <div className={classes.background}>
                     <img src={require('../../img/services/1.png')} alt=''></img>
                </div>
                <ServiceInfo serviceName={this.state.HairCut[0]} serviceId={this.state.HairCut[1]}/>
            </article>
            <article  className={classes.secondPhoto}>
                <div className={classes.background1}>
                    <img src={require('../../img/services/2.png')} alt=''></img>
                </div>
                <ServiceInfo serviceName={this.state.Shave[0]} serviceId={this.state.Shave[1]}/>
            </article>
            <article className={classes.thirdPhoto}>
                <div className={classes.background2}>
                     <img src={require('../../img/services/3.png')} alt=''></img>
                </div>
                <ServiceInfo serviceName={this.state.CutAndShave[0]} serviceId={this.state.CutAndShave[1]}/>
            </article>
            <article className={classes.forthPhoto}>
                <div className={classes.background3}>
                     <img src={require('../../img/services/4.png')} alt=''></img>
                </div>
                <ServiceInfo serviceName={this.state.ShapeUp[0]} serviceId={this.state.ShapeUp[1]}/>
            </article>
            <article className={classes.fifthPhoto}>
                <div className={classes.background}>
                     <img src={require('../../img/services/5.png')} alt=''></img>
                </div>
                <ServiceInfo serviceName={this.state.Style[0]} serviceId={this.state.Style[1]}/>
            </article>
        </div>
    )
    }
}




export default Services