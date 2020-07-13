import React from 'react'

export default class SignUp extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            hasSubmit: false
        }

        this.submitForm = this.submitForm.bind(this)
        this.resetForm = this.resetForm.bind(this)
    }

    handleChange = (event, field) => {
        this.setState({
            [field]: event.target.value,
        })
    }

    submitForm(event) {
        this.setState({
            hasSubmit: true
        })
    }

    resetForm(event) {
        if (this.state.hasSubmit === true) {
            this.setState({
                name: "",
                email: "",
                hasSubmit: false
            })
        }
    }

    enableButton() {
        return (!this.state.name || !this.state.email || this.state.hasSubmit === true) 
    }


    render() {
        let header, type
        if (this.state.hasSubmit === true) {
            header = "Thank you!"
        } else {
            header = this.props.userView ? "Sign up to keep up with us and to recieve updates!" : "Sign up to keep up with us and to recieve updates about hosting!"
            type = this.props.userView ? "User" : "Host"
        }
        const { name, email } = this.state
        return (
            <div className='section sign-up-section' id='sign-up-section'>
                <p>{header}</p>
                <form className='sign-up-form' id='sign-up-form' method="POST" onSubmit={this.submitForm} target="hiddenFrame" action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSedfLaQykE5fFieQqRDEWin8p5sO286uTHOLojbwXP7GDCv4Q/formResponse">
                    <div>
                        <input
                            className='form-fields'
                            type="text" name="entry.595820881"
                            placeholder="Name"
                            value={name}
                            onChange={(event) => (this.handleChange(event, "name"))}
                            required />
                    </div>
                    <br />
                    <div>
                        <input className='form-fields'
                            type="email"
                            name="entry.2075109354"
                            placeholder="Email"
                            value={email}
                            onChange={(event) => (this.handleChange(event, "email"))}
                            required />
                    </div>
                    <div style={{ display: 'none' }}>
                        <input className='form-fields' type="text" name="entry.1811553411" value={type} readOnly />
                    </div>
                    <br />
                    <input className='form-submit sign-up btn-clear' type="submit" name="submit" disabled={this.enableButton()} value="Submit!"></input>
                </form>
                <iframe name="hiddenFrame" onLoad={this.resetForm} title="hiddenframe" style={{ display: 'none' }}></iframe>
            </div>
        )

    }

}