import React from 'react'

export default class SignUp extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='section sign-up-section' id='sign-up-section'>
                <p>Sign up to keep up with us and to recieve updates!</p>
                <form className='sign-up-form' action="#" method="POST">
                    <div>
                        <input className='form-fields' type="text" name="firstName" placeholder="Name"/>
                    </div>
                    <br />
                    <div>
                        <input className='form-fields' type="email" name="email" placeholder="Email"/>
                    </div>
                    <br />
                    <input className='form-submit sign-up btn-clear' type="submit" name="submit" value="Submit!"></input>
                </form>
            </div>
        )
    }

}