import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from "./pages/Main";
import Login from "./pages/Login";
import {ProtectedRoute} from './pages/components/protectedRoute';
import NotFound from './pages/NotFound';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user : false,
      username : '',
      isTeacher : false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.SetIsTeacher = this.SetIsTeacher.bind(this);
    this.ResetIsTeacher = this.ResetIsTeacher.bind(this);
  }
  handleLogin (e) {
    e.preventDefault();
    this.setState({user:true});
  }

  handleLogout (e) {
    e.preventDefault();
    this.setState({user:false});
  }
  SetIsTeacher(e) {
    e.preventDefault();
    this.setState({isTeacher:true});
  }
  ResetIsTeacher(e) {
    e.preventDefault();
    this.setState({isTeacher:false});
  }
  render() {
    const {user,username,isTeacher} = this.state;
    return (
      <div>
          <Router>
        <Switch>
            <Route exact path='/' handleLogin={this.handleLogin} render={
              props => <Login {...props} user={user.toString()} username={username} handleLogin={this.handleLogin} />} />
            <ProtectedRoute exact path='/dashboard' component={Main} />
            <Route path='*' component={NotFound} /> 
            
        </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
/*
handleLogout={this.handleLogout} component={Main} render={
              props => <Main  {...props} 
}
/>
*/