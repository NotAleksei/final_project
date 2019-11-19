import React from 'react';
import Layout from './hoc/Layout/Layout'
import HomePage from './Containers/HomePage/HomePage';
import Services from'./Containers/Services/Services';
import ServicePage from'./Containers/ServicePage/ServicePage';
import UserPage from'./Containers/UserPage/UserPage';
import Auth from './Containers/Auth/Auth'
import ErrorPage from './Containers/ErrorPage/ErrorPage'
import {Route, Switch} from 'react-router-dom'

let logInState =  false;
let user = null;

const logIn = (param) => {
  logInState = true;
  user = param
  console.log(logInState,user)
}

class App extends React.Component{


render(){
  console.log(user, logInState)
    return (
      <Layout>
        <Switch>
          <Route path='/' exact = {true} component={HomePage}/>
          <Route path='/services' component={Services}/>
          <Route path='/service/:id' component={ServicePage}/>
          <Route 
            path='/auth'
            render={
              (props) => <Auth  {...props}/>
            }/>
          <Route 
          // {`/${this.state.user}`} 
            path='/user'
            render={
                () => (localStorage.getItem('logIn') ? (<UserPage/>) : (<ErrorPage/>))
              }/>
          {/* <Route component={ErrorPage}/> */}
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
