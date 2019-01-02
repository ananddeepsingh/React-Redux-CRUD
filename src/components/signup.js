import React, { Component } from 'react';
import { Form, Col, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import '../App.css';

class SIGNUP extends Component {
  constructor(props){
    super(props);

    this.state={
      email: '',
      fname: '',
      lname: '',
      password: ''
    }
  }
  signup(e){
    e.preventDefault();
    this.props.addRecord(this.state);
    
    fetch('http://localhost:3000/data', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      setTimeout(function() {
        alert("User Created Signup")
        this.props.history.push(`/`);
      }.bind(this), 100);
    })

    //this.refs.signup.reset();
    //this.refs.email.focus();
  }

  handleChange = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2 className="text-center">SIGNUP NOW!!</h2>
        <Form ref="signup" className="form-horizontal col-sm-6 custom-form">
          
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl ref="email" type="email" name="email" placeholder="Email" onChange={(e) => this.handleChange(e)} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalFirstName">
            <Col componentClass={ControlLabel} sm={2}>
              First Name
            </Col>
            <Col sm={10}>
              <FormControl ref="fname" type="input" name="fname"  placeholder="First Name" onChange={(e) => this.handleChange(e)} />
            </Col>
          </FormGroup>
          
          <FormGroup controlId="formHorizontalLastName">
            <Col componentClass={ControlLabel} sm={2}>
              Last Name
            </Col>
            <Col sm={10}>
              <FormControl ref="lname" type="input" name="lname" placeholder="Last Name" onChange={(e) => this.handleChange(e)}/>
            </Col>
          </FormGroup>
          
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl ref="password" type="password" name="password" placeholder="" onChange={(e) => this.handleChange(e)}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <a href="/">Login</a>
              <Button type="submit" bsStyle="success" className="pull-right" onClick={(e) => this.signup(e)}>SIGNUP</Button>
            </Col>
          </FormGroup>
        </Form>
      </React.Fragment>
    );
  }
}

export default SIGNUP;
