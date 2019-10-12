import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Axios from 'axios';

class Login extends Component {
  state = {
    username: null,
    password: null
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onLogin = () => {
    if (this.state.username !== '' || this.state.password !== '') {
      Axios.post('URL LOGIN NYA DISINI YAHH', {
        username: this.state.username,
        password: this.state.password
      })
        .then(res => {
          console.log('res login', res);
          if (res && res.data) {
            // disini data response dari server harus ada object token dan user
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userData', JSON.stringify(res.data.user));
          } else {
            alert('username atau password tidak valid silahkan coba lagi');
          }
        })
        .catch(err => {
          alert('Error to login cek console for info');
          console.log('err', err);
        });
    } else {
      alert('Username atau password tidak boleh kosong!');
    }
  }

  render() {
    return (
      <Container style={{ marginTop: 25 }}>
        <Row style={{ marginBottom: 90 }}>
          <Col md={{ size: 6, offset: 3 }}>
            <h2 className="text-center">ONLINE QUIZ!</h2>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <h2 className="page-header center">LOGIN</h2>
            <Form>
              <FormGroup>
                <Label>Username</Label>
                <Input type="text" placeholder="Username" name="username" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input type="password" placeholder="Password" name="password" onChange={this.handleChange} />
              </FormGroup>
              <Button color="primary" type="button" onClick={this.onLogin}>LOGIN</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
