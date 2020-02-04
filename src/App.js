import React from 'react';
import Layout from './hoc/Layout/Layout'
import HomePage from './Containers/HomePage/HomePage';
import Services from'./Containers/Services/Services';
import ServicePage from'./Containers/ServicePage/ServicePage';
import AboutPage from './Containers/AboutPage/AboutPage'
import ContactsPage from './Containers/ContactsPage/ContactsPage'
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
          <Route path={process.env.PUBLIC_URL + '/'} exact = {true} component={HomePage}/>
          <Route path='/services' component={Services}/>
          <Route path='/service/:id' component={ServicePage}/>
          <Route path='/contacts' component={ContactsPage}/>
          <Route path='/auth' component={Auth}/>
          <Route path='/about' component={AboutPage}/>
          <Route 
            path='/user'
            render={
                () => (localStorage.getItem('logIn') ? (<UserPage/>) : (<ErrorPage/>))
              }/>
          <Route component={ErrorPage}/>

        </Switch>
      </Layout>
    )
  }
}

export default App;
