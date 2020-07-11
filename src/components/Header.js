import React from 'react'

export default class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let switchBtnText;
        if (this.props.userView === true) {
            switchBtnText = "Host View"
        } else {
            switchBtnText = "User View"
        }
        return (
            <div className='section main'>
                <div id='info-card'>
                    <h3>Affordable Storage, <br />On Your Time</h3>
                    <p>Book storage when you want it, where you want it. Risk-free and painlessly.</p>
                    <button className='sign-up btn-clear'>Sign Up</button>
                    <button className='host-view btn-clear' onClick={() => this.props.switchView()}>{switchBtnText}</button>
                </div>
                <div className='img-div'>
                    <img id='background-img' src={require('../images/background.jpg')} alt="Bondetous Background" />
                </div>
            </div>
        )
    }
}