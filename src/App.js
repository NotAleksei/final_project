import React from 'react';
import Layout from './hoc/Layout/Layout'
import HomePage from './Containers/HomePage/HomePage';
import Services from'./Containers/Services/Services';
import ServicePage from'./Containers/ServicePage/ServicePage';
import {Route, Switch} from 'react-router-dom'


class App extends React.Component{

const 

render(){
    return (
      <Layout>
        <Switch>
          <Route path='/' exact = {true} component={HomePage}/>
          <Route path='/services' component={Services}/>
          <Route path='/service/:id' component={ServicePage}/>
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
