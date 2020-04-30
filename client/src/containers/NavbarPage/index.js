import React, { Component } from "react";
import {
  MDBBtn,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class NavbarPage extends Component {
  state = {
    collapse1: false,
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  };

  toggleSingleCollapse = (collapseId) => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId],
    });
  };

  render() {
    return (
      <Router>
        <MDBContainer>
          <MDBNavbar
            color='amber lighten-4'
            style={{ marginTop: "20px" }}
            light
          >
            <MDBContainer>
              <MDBBtn href='/' size='lg' className='buttonMenu'>
                H/R
              </MDBBtn>
              <MDBHamburgerToggler
                color='#d3531a'
                id='hamburger1'
                onClick={() => this.toggleSingleCollapse("collapse1")}
              />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBBtn href='/Menu' size='sm' className='buttonMenu'>
                      Menu
                    </MDBBtn>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBBtn
                      href='/Reservation'
                      size='sm'
                      className='buttonMenu'
                    >
                      Reservations
                    </MDBBtn>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBBtn href='/Tables' size='sm' className='buttonMenu'>
                      Waiting List
                    </MDBBtn>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBBtn href='/About' size='sm' className='buttonMenu'>
                      About
                    </MDBBtn>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBBtn href='/Comments' size='sm' className='buttonMenu'>
                      Feedback
                    </MDBBtn>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </MDBContainer>
      </Router>
    );
  }
}

export default NavbarPage;
