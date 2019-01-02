import  React, {Component} from 'react';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';
import { removeAuthorizedUser } from '../actions';

class UserDetails extends Component{
  constructor(props){
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.removeAuthorizedUser(this.props.userEmail);
    alert('User Logout Successfully!!');
    window.location.replace('/')
  }

  render(){
    return(
      <React.Fragment>
        <div className="userDetail col-sm-12">
            <strong>Welcome</strong> { this.props.userEmail }
            <Button type="submit" bsStyle="danger" className="pull-right" onClick={(e) => this.logout(e)}>Logout</Button>
          </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state){
  return{
    userEmail: state.validateUser
  }
}

export default connect(mapStateToProps, {removeAuthorizedUser}) (UserDetails);
