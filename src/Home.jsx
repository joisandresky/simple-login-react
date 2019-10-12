import React from 'react';
import { Container, Row, Col, Button } from "reactstrap";

class Home extends React.Component {

  onLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    this.props.history.push('/login');
  }

  render() {
    // ini cara dapetin data user login yg udh disimpen
    let userData = JSON.parse(localStorage.getItem('userData')) || null;
    return (
      <Container>
        <Row>
          <Col>
            <h2 className="text-center">HALO, {userData ? userData.name : 'Anda Belum Login!'}</h2>
            <Button color="danger" type="button" onClick={this.onLogout}>LOGOUT BRO</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;