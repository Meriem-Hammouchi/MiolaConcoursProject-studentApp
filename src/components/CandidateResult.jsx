import React, { Component } from 'react';
import validIcon from '../Assets/Images/valid.png';
import loadingIcon from '../Assets/Images/loading.png';

import './css.css';
import Axios from 'axios';
class CandidateResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false
        };
    }
    componentDidMount() {
        this.getStudentStatus();
    }
    getStudentStatus = () => {
        Axios.get('http://localhost:8181/dossierCondidature/' + this.props.match.params.id).then((response) => {
            const isValid = response.data == 'Validé';
            this.setState({ valid: isValid });
        });
    };
    render() {
        return (
            <div id="resultat">
                <div className="resultat-card">
                    <div className="icon">
                        <img src={this.state.valid ? validIcon : loadingIcon} />
                    </div>
                    <div className="description">
                        <span>{this.state.valid ? 'Félicitation, ...' : ' Dossier est En cours de traitement'}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CandidateResult;