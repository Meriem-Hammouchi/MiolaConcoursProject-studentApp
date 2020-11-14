import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";

import listfiles from "./components/listefiles";
import UploadFile from './components/UploadFile';

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from './helpers/history';
import { Helmet } from 'react-helmet';
import logo from "./Assets/Images/logo.jpg";
import { Navbar } from 'react-bootstrap'
import displayCnc from "./components/displayCnc ";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }
  componentDidMount() {
    const user = this.props.user;
    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }
  logOut() {
    this.props.dispatch(logout());
  }
  render() {
    const { currentUser } = this.state;
    return (
      <Router history={history}>
        <Navbar bg="dark" variant="dark" className="nav-header">
          <div className="navbar-brand">
            <img className="logo" src={logo} />Miola Concours
             </div>
          {currentUser ? (
            <>
              <div className="navbar navbar-expand-md navbar-left">
                <Link to={""} className="nav-link">
                  Home
                </Link>
                <Link to={"upload"} className="nav-link">
                  Dépôt de dossier
               </Link>
                <UncontrolledDropdown nav inNavbar className="nav-dropdown">
                  <DropdownToggle className="nav-dropdown" nav caret  >
                    Suivi de candidature
                    </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem >
                      <Link to={"listfiles"}>
                        La liste des Admis
                             </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to={"displaycnc"}>
                        Emploi du concours
                            </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown >
              </div>
              <div className="navbar-nav ml-auto mr-2">
                <span className="nav-link navbar navbar-expand-md navbar-right">
                  {currentUser.username}
                </span>
                <span className="nav-link navbar navbar-expand-md navbar-right" >
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </span>

              </div>
            </>
          ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
        </Navbar>
        <Helmet>
          <style>{'body { background-color:#e4e5e5; }'}</style>
        </Helmet>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home", "/profile"]} component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route path="/upload" exact component={UploadFile} />
            <Route path="/listfiles" exact component={listfiles} />
            <Route path="/displaycnc" exact component={displayCnc} />
            <Route exact path="/register" component={Register} />
            <Route path="/user" component={BoardUser} />
          </Switch>
        </div>

      </Router >
    );
  }
}
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}
export default connect(mapStateToProps)(App);
