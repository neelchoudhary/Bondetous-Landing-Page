import React from 'react'
import { slide as Menu } from 'react-burger-menu'

export default class SideMenu extends React.Component {
    
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
              padding: '0.8em'
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
            <Menu styles={styles} className='side-menu'>
                <a id="benefits" className="menu-item" href="#benefits-section">Benefits</a>
                <a id="platform" className="menu-item" href="#platform-section">Getting Started</a>
                <a id="about-us" className="menu-item" href="#about-us-section">About Us</a>
                <a id="sign-up" className="menu-item" href="#sign-up-section">Sign Up</a>
            </Menu>
        )
    }

}