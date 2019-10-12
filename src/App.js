import React, { Component } from 'react';
import Login from './Login';
import Home from './Home';
import { Switch, Route, withRouter } from "react-router-dom";

class App extends Component {
  componentWillMount() {
    let token = localStorage.getItem('token') || null;

    if (!token) {
      this.props.history.replace('/login');
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);