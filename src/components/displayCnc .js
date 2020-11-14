import React, { Component } from 'react';
import { Navbar, Nav, Container, Col, Card, Table, Image, Button, ButtonGroup, ListGroupItem, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
const INSTRUCTOR_API_URL = 'http://localhost:8181/api/test/EvsM'


export default class displayCnc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventsM: []
        };
    }
    componentDidMount() {
        axios.get(INSTRUCTOR_API_URL, { headers: { authorization: 'Basic' } })
            .then(response => response.data)
            .then((data) => {
                this.setState({ eventsM: data });
            });
    }
    render() {
        return (
            <Card style={{ width: "50rem" }}>
                <Card.Img variant="top" />
                <Card.Body style={{ backgroundColor: "#D6EFFE " }}>
                    <Card.Title className="text-center">Emploi de MiolaConcours</Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
                {this.state.eventsM === 0 ?
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>No data fond</ListGroupItem>
                    </ListGroup>
                    :
                    this.state.eventsM.map((pro) => (
                        <ListGroup className="list-group-flush" style={{ "color": "#414F70  " }} >
                            <strong>  <ListGroupItem className=" text-center text-black"> {pro.filiere}</ListGroupItem> </strong>
                            <ListGroupItem>Salle : {pro.salle}</ListGroupItem>
                            <ListGroupItem>Les profes de surveillance: {pro.prof}</ListGroupItem>
                            <ListGroupItem>Date de concours {pro.date_start}  </ListGroupItem>
                            <ListGroupItem>Heure de départ: {pro.time_start} Heur de fin : {pro.time_end} </ListGroupItem>
                        </ListGroup>
                    ))}
                <Card.Body>
                    <Card.Link href="Calender" className="text-centre" style={{ "color": "#06A1FF " }}></Card.Link>
                </Card.Body>
            </Card>
        );
    }
}