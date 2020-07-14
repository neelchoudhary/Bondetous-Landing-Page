import React from 'react'
import { slide as Menu } from 'react-burger-menu'

export default class SideMenu extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }

        this.handleOnClose = this.handleOnClose.bind(this)
        this.handleOnOpen = this.handleOnOpen.bind(this)
    }

    handleOnOpen() {
        this.setState({
            isOpen: true
        })
    }

    handleOnClose() {
        this.setState({
            isOpen: false
        })
    }


    render() {
        var styles = {
            bmBurgerButton: {
                position: 'fixed',
                width: '24px',
                height: '18px',
                right: '36px',
                top: '36px'
            },
            bmBurgerBars: {
                background: 'black'
            },
            bmBurgerBarsHover: {
                background: '#a90000'
            },
            bmCrossButton: {
                height: '24px',
                width: '24px'
            },
            bmCross: {
                background: '#bdc3c7'
            },
            bmMenuWrap: {
                position: 'fixed',
                height: '100%'
            },
            bmMenu: {
                background: 'white',
                padding: '2.5em 1.5em 0',
                fontSize: '1.15em'
            },
            bmItemList: {
                padding: '0 .8em'
            },
            bmItem: {
                display: 'block',
                padding: '20px 10px',
                textDecoration: 'none',
                color: 'black'
            },
            bmOverlay: {
                background: 'rgba(0, 0, 0, 0.3)'
            }
        }

        return (
            <Menu styles={styles} isOpen={this.state.isOpen} onOpen={this.handleOnOpen} onClose={this.handleOnClose} className='side-menu' disableAutoFocus>
                <a id="benefits" className="menu-item" href="#benefits-section" onClick={this.handleOnClose}>Benefits</a>
                <a id="platform" className="menu-item" href="#platform-section" onClick={this.handleOnClose}>Getting Started</a>
                <a id="about-us" className="menu-item" href="#about-us-section" onClick={this.handleOnClose}>About Us</a>
                <a id="sign-up" className="menu-item" href="#sign-up-section" onClick={this.handleOnClose}>Sign Up</a>
            </Menu>
        )
    }

}