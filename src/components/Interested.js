import React from 'react'

export default class Interested extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='section sign-up-banner'>
                <p className='section-subtitle'>Sign up to our mailing list to stay informed.</p>
                <button className='sign-up btn-clear' onClick={() => (window.location.href='#sign-up-section')}>Sign Up!</button>
            </div>
        )
    }

}