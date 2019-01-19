import PropTypes from 'prop-types'
import React, { Component } from 'react'
import logo from '../images/png-trans.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar fixed="top" light expand="sm">
          <div className="container">
          <a href="https://hopeful-neumann-5abd15.netlify.com/"><img src={logo} width="201" height="101"  alt="" /></a>
            <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                
                <NavItem>
                  <NavLink href="/teams">Equipos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/tags">Etiquetas</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/streams">Streams</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/team">Personal</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
