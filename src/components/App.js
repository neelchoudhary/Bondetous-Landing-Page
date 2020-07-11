import React from 'react';
import Header from './Header';
import Benefits from './Benefits';
import Platform from './Platform';
import Interested from './Interested';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import SignUp from './SignUp';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      userView: true
    }

    this.onSwitchView = this.onSwitchView.bind(this)
  }

  onSwitchView() {
    if (this.state.userView === true) {
      this.setState({userView: false})
    } else {
      this.setState({userView: true})
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar userView={this.state.userView}/>
        <Header userView={this.state.userView} switchView={this.onSwitchView}/>
        <Benefits userView={this.state.userView}/>
        <Platform userView={this.state.userView}/>
        <Interested userView={this.state.userView}/>
        <AboutUs userView={this.state.userView}/>
        <SignUp userView={this.state.userView}/>
      </React.Fragment>
    )
  }
}

