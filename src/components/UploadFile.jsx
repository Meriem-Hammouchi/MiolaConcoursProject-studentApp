import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { MDBContainer, MDBFooter } from "mdbreact";
import { FormControl, Button, Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import './css.css'
import './styles.css'
import '../App.css'

class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomFamille: '',
            prenom: '',
            cin: '',
            email: '',
            noteLicence: '',
            nombreAnnees: '',
            noteS1: '', noteS2: '', noteS3: '',
            noteS4: '', noteS5: '', noteS6: '',
            filePathS1: 'Aucun fichier choisi', fileS1: '',
            filePathS2: 'Aucun fichier choisi', fileS2: '',
            filePathS3: 'Aucun fichier choisi', fileS3: '',
            filePathS4: 'Aucun fichier choisi', fileS4: '',
            filePathS5: 'Aucun fichier choisi', fileS5: '',
            filePathS6: 'Aucun fichier choisi', fileS6: '',
            filePathPreinscription: 'Aucun fichier choisi', fileInscription: '',
            filePathCin: 'Aucun fichier choisi', fileCin: '',
            filePathDeugorDeust: 'Aucun fichier choisi', fileDeug: '',
            filePathLicence: 'Aucun fichier choisi', fileLicence: '',
        }
    }
    handleInputChange = (event) => {
        switch (event.target.name) {
            case 'nom':
                this.setState({ nomFamille: event.target.value });
                break;
            case 'prenom':
                this.setState({ prenom: event.target.value });
                break;
            case 'cin':
                this.setState({ cin: event.target.value });
                break;
            case 'noteS1':
                this.setState({ noteS1: event.target.value });
                break;
            case 'noteS2':
                this.setState({ noteS2: event.target.value });
                break;
            case 'noteS3':
                this.setState({ noteS3: event.target.value });
                break;
            case 'noteS4':
                this.setState({ noteS4: event.target.value });
                break;
            case 'noteS5':
                this.setState({ noteS5: event.target.value });
                break;
            case 'noteS6':
                this.setState({ noteS6: event.target.value });
                break;
            case 'email':
                this.setState({ email: event.target.value });
                break;
            case 'noteLicence':
                this.setState({ noteLicence: event.target.value });
                break;
            case 'nombreAnnees':
                this.setState({ nombreAnnees: event.target.value })
        }
    }

    handleFileChange = (event) => {
        //e.target.files[0]
        switch (event.target.name) {
            case 'semestre1':
                this.setState({ filePathS1: event.target.value, fileS1: event.target.files[0] });
                break;
            case 'semestre2':
                this.setState({ filePathS2: event.target.value, fileS2: event.target.files[0] });
                break;
            case 'semestre3':
                this.setState({ filePathS3: event.target.value, fileS3: event.target.files[0] });
                break;
            case 'semestre4':
                this.setState({ filePathS4: event.target.value, fileS4: event.target.files[0] });
                break;
            case 'semestre5':
                this.setState({ filePathS5: event.target.value, fileS5: event.target.files[0] });
                break;
            case 'semestre6':
                this.setState({ filePathS6: event.target.value, fileS6: event.target.files[0] });
                break;
            case 'preinscription':
                this.setState({ filePathPreinscription: event.target.value, fileInscription: event.target.files[0] });
                break;
            case 'cin':
                this.setState({ filePathCin: event.target.value, fileCin: event.target.files[0] });
                break;
            case 'deugordeust':
                this.setState({ filePathDeugorDeust: event.target.value, fileDeug: event.target.files[0] });
                break;
            case 'licence':
                this.setState({ filePathLicence: event.target.value, fileLicence: event.target.files[0] });
                break;
        }

    }
    handleUpload = () => {
        const formData = new FormData();
        formData.append('nomEtudiant', this.state.nomFamille);
        formData.append('prenomEtudiant', this.state.prenom);
        formData.append('cin', this.state.cin);
        formData.append('email', this.state.email);
        formData.append('noteS1', this.state.noteS1);
        formData.append('noteS2', this.state.noteS2);
        formData.append('noteS3', this.state.noteS3);
        formData.append('noteS4', this.state.noteS4);
        formData.append('noteS5', this.state.noteS5);
        formData.append('noteS6', this.state.noteS6);
        formData.append('noteLicence', this.state.noteLicence);
        formData.append('nombreAnnees', this.state.nombreAnnees);
        formData.append('semestre1File', this.state.fileS1);
        formData.append('semestre2File', this.state.fileS2);
        formData.append('semestre3File', this.state.fileS3);
        formData.append('semestre4File', this.state.fileS4);
        formData.append('semestre5File', this.state.fileS5);
        formData.append('semestre6File', this.state.fileS6);
        formData.append('preinscriptionFile', this.state.fileInscription);
        formData.append('cinFile', this.state.fileCin);
        formData.append('deugFile', this.state.fileDeug);
        formData.append('licenceFile', this.state.fileLicence);

        axios.post("http://miolaconcours-student-app.herokuapp.com/upload", formData, {
            headers: {
                "Content-type": "multipart/form-data",
            },
        })
            .then(response => {
                if (response.data != null) {
                    alert("Votre dossier de candidature a bien été enregistré !");
                }
            })
            .catch(err => {
                alert("Error !");
            })
    }
    render() {
        return (
            <div id="page-container" >
                <Jumbotron id="upload" >
                    <span className="blockquote-footer" id="text-important" >
                        Important !<br />
                    Veuillez remplir le formulaire ci-dessous avec les informations qui conviennt !<br />
                    Notez bien que toutes les fichiers à importer devront être sous format pdf !
                </span>
                </Jumbotron >
                <div id="cond-folder">
                    <div className="personal-info">
                        {/* Last Name */}
                        <div className="title-1"> INFORMATION PERSONNELLES :</div><br />
                        <InputGroup className="mb-3">
                            <div className="text-body">Nom de Famille :</div>
                            <FormControl
                                type="text"
                                className="input-text"
                                name="nom"
                                placeholder="Last Name"
                                value={this.state.nomFamille}
                                onChange={this.handleInputChange}
                                required
                            />
                        </InputGroup>
                        {/* First Name */}
                        <InputGroup className="mb-3">
                            <div className="text-body">Prénom :</div>
                            <FormControl
                                className="input-text"
                                type="text"
                                name="prenom"
                                placeholder="First Name"
                                value={this.state.prenom}
                                onChange={this.handleInputChange}
                                required
                            />
                        </InputGroup>
                        {/* CIN */}
                        <InputGroup className="mb-3">
                            <div className="text-body">CIN : </div>
                            <FormControl
                                type="text"
                                className="input-text"
                                name="cin"
                                placeholder="cin"
                                value={this.state.cin}
                                onChange={this.handleInputChange}
                                required
                            />
                        </InputGroup>
                        {/* Email */}
                        <InputGroup className="mb-3">
                            <div className="text-body">Adresse éléctronique :</div>
                            <FormControl
                                type="email"
                                className="input-text"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required
                            />
                        </InputGroup>
                        <br />
                        <br />
                        <br />

                        <div className="title-1"> PARCOURS ACADEMIQUE :</div><br />
                        <div className="semestres-grp">
                            {/* noteS1*/}
                            <InputGroup className="mb-3" id="s-style">
                                <div className="text-body">S1  :</div>
                                <FormControl
                                    type="text"
                                    className="input-text"
                                    name="noteS1"
                                    value={this.state.noteS1}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </InputGroup>
                            {/* notS2 */}
                            <InputGroup className="mb-3" id="s-style">
                                <div className="text-body" >S2  :</div>
                                <FormControl
                                    type="text"
                                    className="input-text"
                                    name="noteS2"
                                    value={this.state.noteS2}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </InputGroup>

                            {/*noteS3*/}
                            <InputGroup className="mb-3" id="s-style">
                                <div className="text-body">S3  :</div>
                                <FormControl
                                    type="text"
                                    className="input-text"
                                    name="noteS3"
                                    value={this.state.noteS3}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </InputGroup>
                        </div>
                        <div className="semestres-grp">
                            {/* noteS4*/}
                            <InputGroup className="mb-3" id="s-style">
                                <div className="text-body">S4  :</div>
                                <FormControl
                                    type="text"
                                    className="input-text"
                                    name="noteS4"
                                    value={this.state.noteS4}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </InputGroup>
                            {/* noteS5 */}
                            <InputGroup className="mb-3" id="s-style">
                                <div className="text-body" >S5  :</div>
                                <FormControl
                                    type="text"
                                    className="input-text"
                                    name="noteS5"
                                    value={this.state.noteS5}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </InputGroup>

                            {/*noteS6*/}
                            <InputGroup className="mb-3" id="s-style">
                                <div className="text-body">S6  :</div>
                                <FormControl
                                    type="text"
                                    className="input-text"
                                    name="noteS6"
                                    value={this.state.noteS6}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </InputGroup>
                        </div>
                        <br />
                        {/* Note Licence */}
                        <InputGroup className="mb-3">
                            <div className="text-body">Note de Licence  :</div>
                            <FormControl
                                type="text"
                                className="input-text"
                                name="noteLicence"
                                placeholder="Veuillez saisir la note de licence"
                                value={this.state.noteLicence}
                                onChange={this.handleInputChange}
                                required
                            />
                        </InputGroup>
                        {/*Nombre Annees*/}
                        <InputGroup className="mb-3">
                            <div className="text-body">Nombre des années d'obtention de licence  :</div>
                            <Form.Control
                                name="nombreAnnees"
                                value={this.state.nombreAnnees}
                                onChange={this.handleInputChange}
                                as="select">
                                <option>3</option>
                                <option>4</option>
                            </Form.Control>
                            <br /><br /><br />
                        </InputGroup>

                    </div>
                    <div className="files">
                        {/* Semestre 1 */}
                        <InputGroup className="mb-3">
                            <div className="text-body">Semestre 1 : </div>
                            <label htmlFor="semestre1" className="file-text">
                                {this.state.filePathS1}
                            </label>
                            <FormControl
                                className="input-button"
                                type="file"
                                id="semestre1"
                                name="semestre1"
                                onChange={this.handleFileChange}
                                required
                            />
                        </InputGroup>
                        {/* Semestre 2 */}
                        <InputGroup className="mb-3">
                            <div className="text-body">Semestre 2 : </div>
                            <label htmlFor="semestre2" className="file-text">
                                {this.state.filePathS2}
                            </label>
                            <FormControl
                                className="input-button"
                                type="file"
                                id="semestre2"
                                name="semestre2"
                                onChange={this.handleFileChange}
                                required
                            />
                        </InputGroup>
                        {/* Semestre 3 */}
                        <InputGroup className="mb-3">
                            <div className="text-body">Semestre 3 : </div>
                            <label htmlFor="semestre3" className="file-text">
                                {this.state.filePathS3}
                            </label>
                            <FormControl
                                className="input-button"
                                type="file"
                                id="semestre3"
                                name="semestre3"
                                onChange={this.handleFileChange}
                                required
                            />
                        </InputGroup>
                        {/* Semestre 4 */}
                        <InputGroup className="mb-3">
                            <div className="text-body">Semestre 4 : </div>
                            <label htmlFor="semestre4" className="file-text">
                                {this.state.filePathS4}
                            </label>
                            <FormControl
                                className="input-button"
                                type="file"
                                id="semestre4"
                                name="semestre4"
                                onChange={this.handleFileChange}
                                required
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <div className="text-body">Semestre 5 : </div>
                            <label htmlFor="semestre5" className="file-text">
                                {this.state.filePathS5}
                            </label>
                            <FormControl
                                className="input-button"
                                type="file"
                                id="semestre5"
                                name="semestre5"
                                onChange={this.handleFileChange}
                                required
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <div className="text-body">Semestre 6 : </div>
                            <label htmlFor="semestre6" className="file-text">
                                {this.state.filePathS6}
                            </label>
                            <FormControl
                                className="input-button"
                                type="file"
                                id="semestre6"
                                name="semestre6"
                                onChange={this.handleFileChange}
                                required
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <div className="text-body">Fiche de préinscription : </div>
                            <label htmlFor="preinscription" className="file-text">
                                {this.state.filePathPreinscription}
                            </label>
                            <FormControl
                                className="input-button"
                                type="file"
                                id="preinscription"
                                name="preinscription"
                                onChange={this.handleFileChange}
                                required
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <div className="text-body">Carte d'Identité National : </div>
                            <label htmlFor="cin" className="file-text">
                                {this.state.filePathCin}
                            </label>
                            <FormControl
                                className="input-button"
                                type="file"
                                id="cin"
                                name="cin"
                                onChange={this.handleFileChange}
                                required
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <div className="text-body">Diplôme de Deug/Deust : </div>
                            <label htmlFor="deugordeust" className="file-text">
                                {this.state.filePathDeugorDeust}
                            </label>
                            <FormControl
                                className="input-button"
                                type="file"
                                id="deugordeust"
                                name="deugordeust"
                                onChange={this.handleFileChange}
                                required
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <div className="text-body">Diplôme de Licence : </div>
                            <label htmlFor="licence" className="file-text">
                                {this.state.filePathLicence}
                            </label>
                            <FormControl
                                className="input-button"
                                type="file"
                                id="licence"
                                name="licence"
                                onChange={this.handleFileChange}
                                required
                            />
                        </InputGroup>
                    </div>
                </div>
                <div className="controls">
                    {/* <Button id="create-button">Créer</Button>*/}
                    <Button
                        variant="primary"
                        className="send-button"
                        onClick={this.handleUpload}>Envoyer</Button>
                </div>
                <MDBFooter color="blue" className="font-small pt-4 mt-4" id="colorfooter">
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: MiolaConcours <a href="http://ensias.um5.ac.ma/"> http://ensias.um5.ac.ma/ </a>
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </div>
        );
    }
}
export default UploadFile;
