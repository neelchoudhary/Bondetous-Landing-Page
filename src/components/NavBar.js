import React from 'react'
import SideMenu from './SideMenu';

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
        if (this.state.width > 950) {
            return (
                <nav id='top-bar'>
                    <a href="/#" id='left-side-link'>
                        <div id='left-side'>
                            <img id='company-logo' src={require("../images/logo_web.png")} alt="Logo" />
                            {this.props.userView === true ? (
                                <h2 id='company-name'>SpaceFaster</h2>
                            ) :
                                (
                                    <h2 id='company-name'>SpaceFaster <br /> for hosts</h2>
                                )
                            }
                        </div>
                    </a>
                    <ul id='nav-bar'>
                        <li><a href='#benefits-section'>Benefits</a></li>
                        <li><a href='#platform-section'>Getting Started</a></li>
                        <li><a href='#about-us-section'>About Us</a></li>
                        <li className='sign-up'><a target="_blank" href='https://platform.spacefaster.com/'>See Beta</a></li>
                    </ul>
                </nav>
            )
        } else if (this.state.width > 359) {
            return (
                <React.Fragment>
                    <SideMenu />
                    <nav id='top-bar'>
                        <a href="/#" id='left-side-link'>
                            <div id='left-side'>
                                <img id='company-logo' src={require("../images/logo_web.png")} alt="Logo" />
                                {this.props.userView === true ? (
                                    <h2 id='company-name'>SpaceFaster</h2>
                                ) :
                                    (
                                        <h2 id='company-name'>SpaceFaster <br /> for hosts</h2>
                                    )
                                }
                            </div>
                        </a>
                    </nav>
                </React.Fragment>

            )
        } else {
            return (
                <React.Fragment>
                    <SideMenu />
                    <nav id='top-bar'>
                        <a href="/#" id='left-side-link'>
                            <div id='left-side'>
                                <img id='company-logo' src={require("../images/logo_web.png")} alt="Logo" />
                                {this.props.userView === false && <h2 id='company-name'>Hosts</h2>}
                            </div>
                        </a>
                    </nav>
                </React.Fragment>

            )
        }
    }

}