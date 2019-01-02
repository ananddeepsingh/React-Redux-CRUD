import React, { Component } from 'react';
import { connect } from 'react-redux';
import  UserDetails from '../components/userDetail';
import  TableGrid from '../components/tableGrid';

class StudentList extends Component {
  constructor(props) {
    super(props);
    if (this.props.loggedInUser && this.props.loggedInUser.validateUser) {
      this.props.history.push("/student");
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="loader" className="loader hide"></div>
        <h2 className="text-center">STUDENT LIST</h2>
        <header>
          <UserDetails />
        </header>
          <TableGrid />
        
      </React.Fragment>
    );
  }
}

function mapStateToProps(state){
  return{
    loggedInUser : state
  }
}

// export default StudentList;
export default connect(mapStateToProps, null)(StudentList);
