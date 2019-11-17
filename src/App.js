import React from 'react';
import Layout from './hoc/Layout/Layout'
import HomePage from './Containers/HomePage/HomePage';
import Services from'./Containers/Services/Services';
import ServicePage from'./Containers/ServicePage/ServicePage';
import UserPage from'./Containers/UserPage/UserPage';
import Auth from './Containers/Auth/Auth'
import ErrorPage from './Containers/ErrorPage/ErrorPage'
import {Route, Switch} from 'react-router-dom'



class App extends React.Component{

state={
  logIn: true,
  userName: 'name'
}


// передавай в layout сведения о регистрации. 
render(){
    return (
      <Layout>
        <Switch>
          <Route path='/' exact = {true} component={HomePage}/>
          <Route path='/services' component={Services}/>
          <Route path='/service/:id' component={ServicePage}/>
          <Route path='/auth' component={Auth}/>
          {this.state.logIn && <Route path='/user' component={UserPage}/>}
          <Route component={ErrorPage}/>
          {/* <Route path='/about' component={About}/>
          <Route path='/services' component={Services}/>
          <Route path='/galery' component={Galery}/>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/user' component={UserPage}/> */}
        </Switch>
      </Layout>
    )
  }
}

export default App;
