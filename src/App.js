import React, { Component } from 'react';
import './css/tailwind.css';
import CourseDetail from './Components/Screens/CourseDetail';
import SignupScreen from './Components/Screens/SignupScreen';
import SignInScreen from './Components/Screens/SignInScreen';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Components/Layouts/Header';
import { connect } from 'react-redux';
import { createrAction } from './Components/Redux/Action';
import { FETCH_LOGIN } from './Components/Redux/Action/type';
import LayoutHomeScreens from './Components/Screens/LayoutHomeScreen';
import CategoryDetail from './Components/Screens/Category/CategoryDetail';
import PayMent from './Components/Screens/PayMent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
        <Route path='/payment' component={PayMent} />
          <Route path='/detail/:id' component={CourseDetail} />
          <Route path='/signup' component={SignupScreen} />
          <Route path='/signin' component={SignInScreen} />
          <Route path='/category/:name' component={CategoryDetail} />
          <Route path='/' component={LayoutHomeScreens} />
        </Switch>
      </BrowserRouter>
    );
  }

  _getcredentials = () => {
    const credentials = localStorage.getItem('credentails');
    if (credentials) {
      this.props.dispatch(createrAction(FETCH_LOGIN, JSON.parse(credentials)))
    }
  }
  componentDidMount() {
    this._getcredentials();
  }
}

export default connect()(App);
