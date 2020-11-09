import React from 'react';
import Header from './Header';
import Benefits from './Benefits';
import Platform from './Platform';
import Interested from './Interested';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


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
      this.setState({ userView: false })
    } else {
      this.setState({ userView: true })
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={() => (<LandingPage userView={true} switchView={this.onSwitchView}/>)} />
          <Route path='/hosts' render={() => (<LandingPage userView={false} switchView={this.onSwitchView}/>)} />
          <Redirect from='/user' to='/' />
          <Route render={() => (<h1>404 Page Not Found</h1>)} />
        </Switch>
      </Router>
    )
  }
}

function LandingPage({ userView, switchView }) {
  return (
    <React.Fragment>
      <NavBar userView={userView} />
      <Header userView={userView} switchView={switchView} />
      <Benefits userView={userView} />
      <Platform userView={userView} />
      <Interested userView={userView} />
      <AboutUs userView={userView} />
      <Footer userView={userView} />
    </React.Fragment>
  )
}
