import React, { Component } from "react";
import { Jumbotron } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import './css.css'

class Profile extends Component {

  render() {
    const { user: currentUser } = this.props;

    if (!currentUser) {
      return <Redirect to="/login" />;
    }
    return (
      <Jumbotron id="welcome" className="bg-dark text-white">
        <h1 className>Bienvenue  {currentUser.username} sur MiolaConcours</h1>
        <blockquote className="blockquote mb-0">
          <p>
            Le meilleur service  de candidature{/*de déroulement de concours d'accès au master Miola*/} est exposé près de chez vous
                </p>
          <br /><br />
          <footer id="welcome-footer" className="blockquote-footer">
            Master MIOLA
            </footer>
        </blockquote>
      </Jumbotron>
    );
  }
}
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}
export default connect(mapStateToProps)(Profile);
