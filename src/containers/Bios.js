import React, { Component } from "react";
import { Button, CardDeck, Form, FormControl } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import InternCard from '../components/InternCard';
import "./Bios.css";

class Bios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      interns: [],
      cards: [],
      bio: "",
    }
  }

  componentDidMount() {
    const API = 'http://hackathonnodejsbackend.us-south.cf.appdomain.cloud/command';
    fetch(API, {
      crossDomain: true,
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => this.addUsers(data));
  }

  validateForm() {
    return true;
  }

  addUsers(data) {
    var interns = []

    for (var intern in data["user_list"]) {
      interns.push(data["user_list"][intern])
    }

    this.setState({ interns: interns })

    let cards = interns.map(intern => {
      return (
        <InternCard userName={intern["NAME"]} />
      )
    })

    this.setState({ cards: cards })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ isLoading: true });
    try {
      // TODO: send updated bio
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  }

  render() {

    return (
      <div className="InternBios">
        <div className="lander">
          <Form inline className="mb-3 ml-0">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="primary">Search</Button>
          </Form>
          <CardDeck className="mb-3">
            {this.state.cards}
          </CardDeck>
          <LinkContainer to="/bios/edit">
            <Button variant="primary">
              Edit
            </Button>
          </LinkContainer>
        </div >
      </div >
    );

  }

}

export default Bios;
