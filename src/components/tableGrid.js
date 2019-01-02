import React, { Component } from "react";
import { connect } from "react-redux";
import { removeAuthorizedUser } from "../actions";
import RenderRows from "./renderRows";

class TableGrid extends Component {
  constructor(props) {
    super(props);
    let firstName = this.props.userEmail;
    if (!firstName.length) {
      window.location.replace("/");
    }
  }
  renderRow() {
    let data = this.props.allRecords;
    let row = data.map((record, i) => <RenderRows data={record} key={i} />);
    return row;
  }
  render() {
    return (
      <React.Fragment>
        <div className="rTable">
          <div className="rTableHeading">
            <div className="rTableHead" onClick={e => {}}>
              {" "}
              ID
            </div>
            <div className="rTableHead" onClick={e => {}}>
              {" "}
              Email
            </div>
            <div className="rTableHead" onClick={e => {}}>
              {" "}
              First Name
            </div>
            <div className="rTableHead" onClick={e => {}}>
              {" "}
              Last Name
            </div>
            <div className="rTableHead" onClick={e => {}}>
              {" "}
              Edit
            </div>
            <div className="rTableHead" onClick={e => {}}>
              {" "}
              Delete
            </div>
          </div>
          <div className="rTableBody">{this.renderRow()}</div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    allRecords: state.databaseHandling,
    userEmail: state.validateUser
  };
}

export default connect(
  mapStateToProps,
  { removeAuthorizedUser }
)(TableGrid);
