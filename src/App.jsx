import React, { Component } from 'react';
import { ContactsList } from './components/ContactsList';
import { AppHeader } from './components/AppHeader';
import { Container, Row, Col } from 'reactstrap';
import JSON from './db.json.json';



class App extends Component {

  state = {
    data: JSON,
    filtered: []
  }

  getFiltered = (event) => {
    let keyword = event.target.value;
    console.log(event.target.value)
    let filtered = this.state.data.filter((item) => {
      return item.title.indexOf(keyword) > -1
    });
    this.setState({
      filtered
    })
  }


  render() {
    return (

      <Container style={{ display: "grid", placeItems: "center" }} >
        <Row>
          <Col>
            <AppHeader keywords={this.getFiltered} />
          </Col>
        </Row>
        <Row style={{ width: "50%" }} >
          <ContactsList data={this.state.filtered.length === 0 ? this.state.data : this.state.filtered} />
        </Row>
      </Container >

    );
  }
};


export default App;
