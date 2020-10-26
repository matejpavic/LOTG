import React, { Component } from 'react';
import Login from './components/Login';
import LoginEng from './components/LoginEng';
import Page from './components/Page';
import Quiz from './components/Quiz';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      isAuth: false
    }
  }

 onInputChange = (event) => {
    const password = "balun";
    if (event.target.value === password) {
      this.setState({ isAuth: true });
    }
  }

  onButtonPristupi = () => {
    if (this.state.isAuth === true) {
      this.setState({route: 'list'});
    }  
  }

  onButtonHrvatski = () => {
      this.setState({route: 'home'});
  }

  onButtonEnglish = () => {
      this.setState({route: 'homeEng'});
  }

  onButtonLogOut = () => {
      this.setState ({route: 'home'});
  }

  render () {
    return (
      <div>
          {
            this.state.route === 'list' ?
              <Page onButtonLogOut = {this.onButtonLogOut} />:
           (this.state.route === 'home'? 
              <Login onButtonEnglish = {this.onButtonEnglish} onInputChange = {this.onInputChange} onButtonPristupi = {this.onButtonPristupi} />:
            (this.state.route === 'homeEng' ?
              <LoginEng onButtonHrvatski = {this.onButtonHrvatski} onInputChange = {this.onInputChange} onButtonPristupi = {this.onButtonPristupi} />:
              <Login onButtonEnglish = {this.onButtonEnglish} onInputChange = {this.onInputChange} onButtonPristupi = {this.onButtonPristupi} />))
      }
      </div>
    );
  }
}

export default App;