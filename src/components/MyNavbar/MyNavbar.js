import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
          <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/new">New Item</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/mystuff">My Stuff</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={this.logMeOut}>Logout</NavLink>
          </NavItem>
        </Nav>
        );
      }
      return (
       <Nav className="ml-auto" navbar></Nav>
      );
    };

    return (
      <div className="MyNavbar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">React Hoarder</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {buildNavbar(authed)}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
