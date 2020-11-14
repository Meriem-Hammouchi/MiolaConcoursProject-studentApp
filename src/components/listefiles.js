import React, { Component } from 'react';
import UploadService from "../services/upload-files.service";
import board from '../Assets/Images/board.jpeg'
import '../App.css';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay
} from 'reactstrap';

import laureat from '../Assets/Images/laureat.png'

class uploadFile extends React.Component {

    constructor(props) {
        super(props);
        this.selectFile = this.selectFile.bind(this);
        this.selectT = this.selectT.bind(this);
        this.upload = this.upload.bind(this);

        this.state = {
            selectedFiles: undefined,
            currentFile: undefined,
            progress: 0,
            message: "",
            name: "",

            fileInfos: [],
        };
    }

    componentDidMount() {
        UploadService.getFiles().then((response) => {
            this.setState({
                fileInfos: response.data,
            });
        });
    }

    selectFile(event) {
        this.setState({
            selectedFiles: event.target.files,
        });
    }

    selectT(event) {
        this.setState({
            name: event.target.value,
        });
    }

    upload() {
        let currentFile = this.state.selectedFiles[0];

        this.setState({
            progress: 0,
            currentFile: currentFile,
        });

        UploadService.upload(currentFile, this.state.name, (event) => {
            this.setState({
                progress: Math.round((100 * event.loaded) / event.total),
            });
        })
            .then((response) => {
                this.setState({
                    message: response.data.message,
                });
                return UploadService.getFiles();
            })
            .then((files) => {
                this.setState({
                    fileInfos: files.data,
                });
            })
            .catch(() => {
                this.setState({
                    progress: 0,
                    message: "Could not upload the file!",
                    currentFile: undefined,
                });
            });

        this.setState({
            selectedFiles: undefined,

        });
    }

    render() {
        const {
            fileInfos,
        } = this.state;

        return (
            <div className="no-scroll">
                <Card style={{ width: '99rem', height: '41rem', marginLeft: '7%', marginTop: '2%', }} >
                    <CardImg
                        alt="..."
                        src={board}
                    ></CardImg>
                    <CardImgOverlay className=" d-flex align-items-center">
                        <img className="st" alt="logo3" src={laureat} style={{ width: '14rem' }} />
                        <CardBody>
                            <CardTitle className=" text-black text-center" tag="h4" style={{ marginTop: '18%' }}>La liste des fichiers</CardTitle>
                            <CardSubtitle className="text-center"> Choisissez le fichier que vous souhaitez télécharger</CardSubtitle>
                            <br />
                            <strong>
                                <ul className="list-group list-group-flush" style={{ margin: '15%' }} tag="h3">
                                    {fileInfos &&
                                        fileInfos.map((file, index) => (
                                            <li tag="h3" key={index}>
                                                <a href={file.url}>{file.name}</a>
                                            </li>
                                        ))}
                                </ul> </strong>
                        </CardBody> </CardImgOverlay>
                </Card>
            </div >
        );
    }
}

export default uploadFile;