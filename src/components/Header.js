import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component {

    render() {
        let switchBtnText;
        let url;
        if (this.props.userView === true) {
            switchBtnText = "Host View"
            url = "/hosts"
        } else {
            switchBtnText = "User View"
            url = "/"
        }
        return (
            <div className='section main' id='header-section'>
                <div id='info-card'>
                    <h3>Affordable Storage, <br />On Your Time</h3>
                    <p>Book storage when you want it, where you want it. Risk-free and painlessly.</p>
                    <button className='sign-up btn-clear'><a target="_blank" rel="noopener noreferrer" href='https://platform.spacefaster.com/'>See Beta</a></button>
                    <NavLink to={url} exact>
                        <button className='host-view btn-clear'>{switchBtnText}</button>
                    </NavLink>
                </div>
                <div className='img-div'>
                    <img id='background-img' src={require('../images/header_background.png')} alt="SpaceFaster Background" />
                </div>
            </div>
        )
    }
}