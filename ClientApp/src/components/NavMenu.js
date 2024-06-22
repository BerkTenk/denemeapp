import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import Logo from "../assets/logo.png"


export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 mt-2" container light>
          <NavbarBrand tag={Link} to="/">
            <img src={Logo} width={"75%"} height={"75%"}></img>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow ">
            <UncontrolledDropdown nav inNavbar className="me-2">
              <DropdownToggle nav caret className ="btn btn-outline-success">
                OUR THERAPIES
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Individual Therapy</DropdownItem>
                <DropdownItem>Couples Therapy</DropdownItem>
                <DropdownItem>Consult a social worker online</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
              <NavItem>
                <NavLink tag={Link} className="text-dark btn btn-outline-success me-2" to="/register">REGISTER</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark btn btn-outline-success me-2" to="/calendar">CALENDAR</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark btn btn-outline-success me-2" to="/">BLOG</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark btn btn-outline-success me-2" to="/">JOIN US</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark btn btn-outline-success me-2" to="/">RATES</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}