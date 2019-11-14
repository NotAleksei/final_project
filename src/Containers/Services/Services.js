import React from 'react'
import ServiceInfo from '../../Components/UI/ServiceInfo/ServiceInfo'
import classes from './Services.module.css'

class Services extends React.Component {

    state = {
        HairCut: 'СТРИЖКА',
        Shave: 'БРИТЬЕ',
        CutAndShave: 'СТРИЖКА И БРИТЬЕ',
        ShapeUp: 'МОДЕЛИРОВАНИЕ БОРОДЫ',
        All: 'All',
    }


    render(){
    return(
        <div className={classes.Services}>
            <article  className={classes.firstPhoto}>
                <img src={require('../../img/services/1.jpg')} alt=''></img>
                <ServiceInfo serviceName={this.state.HairCut}/>
            </article>
            <article  className={classes.secondPhoto}>
                <img src={require('../../img/services/2.jpg')} alt=''></img>
                <ServiceInfo serviceName={this.state.Shave}/>
            </article>
            <article className={classes.thirdPhoto}>
                <img src={require('../../img/services/3.jpg')} alt=''></img>
                <ServiceInfo serviceName={this.state.CutAndShave}/>
            </article>
            <article className={classes.forthPhoto}>
                <img src={require('../../img/services/4.jpg')} alt=''></img>
                <ServiceInfo serviceName={this.state.ShapeUp}/>
            </article>
            <article className={classes.fifthPhoto}>
                <img src={require('../../img/services/5.jpg')} alt=''></img>
                <ServiceInfo serviceName={this.state.All}/>
            </article>
        </div>
    )
    }
}




export default Services