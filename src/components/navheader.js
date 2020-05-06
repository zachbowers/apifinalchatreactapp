import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../actions/authActions";

class NavHeader extends Component {

    logout() {
        this.props.dispatch(logoutUser());
    }

    render() {
        return (
            <div id="wrapper">
                <Nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" id="nav1bar">
                    <div className="container-fluid d-flex flex-column p-0">
                        <div className="text-center d-none d-md-inline"></div>
                        <ul className="nav navbar-nav text-light" id="accordionSidebar">
                            <li className="nav-item dropdown no-arrow" role="presentation">
                                <LinkContainer to="../">
                                    <img id="brandlogo" src="assets/img/light.png" />
                                </LinkContainer>
                            </li>
                        </ul>
                    </div>
                </Nav>
                <Nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" id="navbar2">
                    <div className="container-fluid d-flex flex-column p-0">
                        <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" id="brandHeader">
                            <LinkContainer to="../">
                                <div className="sidebar-brand-text mx-3"><span>ourglass</span></div>
                            </LinkContainer>
                        </a>
                        <hr className="sidebar-divider my-0" > </hr>
                        <ul className="nav navbar-nav text-light" id="accordionSidebar"> </ul>
                    </div>

                </Nav>
            </div>



        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn,
        username: state.auth.username,
        selectedMovie: state.movie.selectedMovie,
    }
}

export default withRouter(connect(mapStateToProps)(NavHeader));