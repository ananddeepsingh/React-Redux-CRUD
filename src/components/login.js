import React, { Component } from "react";
import {
  Form,
  Col,
  FormControl,
  FormGroup,
  ControlLabel,
  Button
} from "react-bootstrap";
import { validateUser, setAuthorizedUser, saveDataInState } from "../actions";
import { connect } from "react-redux";
import "../App.css";

class LOGIN extends Component {
  constructor(props) {
    super(props);

    if (this.props.loggedInUser && this.props.loggedInUser.setUserEmail) {
      this.props.history.push("/student");
    } else {
      this.props.history.push("/");
    }

    this.state = {
      title: "LOGIN",
      email: "",
      password: "",
      isEmailExist: false,
      isPasswordExist: false
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = e => {
    fetch("http://localhost:3000/data")
      .then(res => res.json())
      .then(json => {
        this.props.saveDataInState(json);
      });
  }

  onLogin = e => {
    e.preventDefault();
    let datas = this.props.records;
    let loginEmail = this.state.email;
    let loginPassword = this.state.password;
    let loader = document.querySelector("#loader");
    // let obj = {
    //   loginEmail,
    //   loginPassword
    // }
    // this.props.validateUser(obj);

    if (loginEmail && loginPassword) {
      var emailFound = datas.some(item => item.email === loginEmail);
      var passwordFound = datas.some(item => item.password === loginPassword);

      if (emailFound && passwordFound) {
        this.props.setAuthorizedUser(loginEmail);
        //setTimeout(function() {
        this.props.history.push("/student");
        //}.bind(this), 1000);
      } else {
        alert("wrong username or password");
      }
      loader.classList.add("hide");
    }
  };

  handleChange = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div id="loader" className="loader hide" />
        <h2 className="text-center">LOGIN NOW!!</h2>
        <Form ref="loginup" className="form-horizontal col-sm-4 custom-form">
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl
                ref="loginEmail"
                type="email"
                name="email"
                placeholder="Email"
                onChange={e => this.handleChange(e)}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl
                ref="loginPassword"
                type="password"
                name="password"
                placeholder=""
                onChange={e => this.handleChange(e)}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <a href="/signup">SignUp</a>
              <Button
                type="submit"
                bsStyle="success"
                className="pull-right"
                onClick={e => this.onLogin(e)}
              >
                Login
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = function (dispatch) {
  return{
    records: dispatch.databaseHandling
  }
}

function mapStateToProps(userEmail) {
  return {
    loggedInUser: userEmail
  };
}

export default connect(mapDispatchToProps, { validateUser, setAuthorizedUser, saveDataInState, mapStateToProps })(LOGIN);
