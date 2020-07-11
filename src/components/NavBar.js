import React from 'react'

export default class NavBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        if (this.state.width > 900) {
            return (
                <nav id='top-bar'>
                    <div id='left-side'>
                        <img id='company-logo' src={require("../images/logo_web.png")} alt="Logo" />
                        {this.props.userView === true ? (
                            <h2 id='company-name'>Bondetous</h2>
                        ) :
                            (
                                <h2 id='company-name'>Bondetous <br /> for hosts</h2>
                            )
                        }
                    </div>
                    <ul id='nav-bar'>
                        <li><a href='#benefits-section'>Benefits</a></li>
                        <li><a href='#platform-section'>Getting Started</a></li>
                        <li><a href='#about-us-section'>About Us</a></li>
                        <li className='sign-up'><a href='#sign-up-section'>Sign Up</a></li>
                    </ul>
                </nav>
            )
        } else {
            return null
        }
    }

}