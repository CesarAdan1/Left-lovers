import React, { Component } from 'react';
import Home from './components/Home/Home';
import Footer from './components/Home/Footer';
import Enter from './components/Logs/Enter';
import How from './components/Simpletext/How';
import What from './components/Simpletext/What';
import Why from './components/Simpletext/Why';
import Terms from './components/Simpletext/Terms';
import Log from './components/Logs/Log';
import Contacto from './components/Simpletext/Contacto';
import Nosotros from './components/Simpletext/Nosotros';
import FAQ from './components/Simpletext/FAQ';
import Header from './components/Home/Header';
import Product from './components/Profiles/Product';
import { Switch, Route, Redirect} from 'react-router-dom';
import ProfileVendor from './components/Profiles/ProfileVendor';
import LogConsumer from './components/Logs/LogConsumer';
import Profile from './components/Profiles/Profile';
import ProfileUser from './components/Profiles/ProfileUser';
import Accounts from './components/Logs/Accounts/Accounts';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    // AuthService.isAuthenticated === true
    localStorage.getItem('jwt') !== null
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/',
        state: {
          from: props.location
        }
      }} />
  )} />
);


class App extends Component {
 
  render() {
    return (
      <div> 
     <Header/>  
      <Switch>
      <PrivateRoute path={'/Profile'} exact component={ Profile } /> 
      <PrivateRoute path={'/ProfileUser'} exact component={ ProfileUser } />       
      <Route exact path={"/ProfileVendor"} component={ProfileVendor}/>
        <Route exact path={"/Product"} component={Product}/>
        <Route exact path={"/Enter"} component={Enter}/> 
        <Route exact path={"/FAQ"} component={FAQ} /> 
        <Route exact path={"/Log"} component={Log} /> 
        <Route exact path={"/LogConsumer"} component={LogConsumer} /> 
        <Route exact path = {"/Accounts"} component={Accounts}/>
        <Route exact path={"/Nosotros"} component={Nosotros} />  
        <Route exact path={"/Contacto"} component={Contacto} /> 
        <Route exact path={"/únete"} component={Log}/>   
        <Route exact path={"/porque"} component={Why}/>
        <Route exact path={"/quees"} component={What}/>
        <Route exact path={"/como"} component={How}/>
        <Route exact path={"/TerminosyCondiciones"} component={Terms}/>
        <Route exact path={"/"} component={Home}/>
      </Switch> 
      
     <Footer/>
     
      </div>
    );
  }
}

export default App;
