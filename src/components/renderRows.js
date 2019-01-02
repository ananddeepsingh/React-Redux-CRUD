import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import UTILS from "../sharedComponents/Utils";
import { updateDataInState, deleteRecordFromState } from "../actions";

class RenderRows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      filterdData: ""
    };
    this.deleteRecordID = null;

    this.loader = document.querySelector("#loader");
    this.editFunction = this.editFunction.bind(this);
  }

  handleChange = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  editFunction(recordSet, targetEle, updatedFName, lnamePlaceHolder) {
    let _this = this;
    ReactDOM.findDOMNode(this.loader).classList.remove("hide");

    fetch("http://localhost:3000/data/" + recordSet.id, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        id: recordSet.id,
        email: recordSet.email,
        fname: updatedFName.value,
        lname: lnamePlaceHolder.value
      })
    })
      .then(res => res.json())
      .then(json => {
        targetEle.innerText = "Edit";
        targetEle.nextElementSibling.classList.remove("show");
        targetEle.nextElementSibling.classList.add("hide");
        ReactDOM.findDOMNode(this.loader).classList.add("hide");
        _this.props.updateDataInState(
          recordSet.id,
          updatedFName.value,
          lnamePlaceHolder.value
        );
      });
  }

  toggleEdit(e, recordSet) {
    e.preventDefault();
    let targetEle = e.target;
    let firstTimeuser = true;

    if (targetEle.innerText === "Edit" && firstTimeuser) {
      targetEle.innerText = "Update";
      UTILS.toggleElementClass(this.refs.cancelBtn);
      firstTimeuser = false;
    }

    if (targetEle.innerText === "Cancel") {
      UTILS.toggleElementClass(targetEle);
      targetEle.previousElementSibling.innerText = "Edit";
    }

    UTILS.toggleElementClass(this.refs.fnamePlaceHolder);
    UTILS.toggleElementClass(this.refs.lnamePlaceHolder);
    UTILS.toggleElementClass(this.refs.updatedFName);
    UTILS.toggleElementClass(this.refs.updatedLName);

    if (targetEle.innerText === "Update" && firstTimeuser) {
      let updatedFName = this.refs.updatedFName;
      let lnamePlaceHolder = this.refs.updatedLName;
      this.editFunction(recordSet, targetEle, updatedFName, lnamePlaceHolder);
    }
  }

  removeRecord(e, recordSetID) {
    e.preventDefault();
    let _this = this;
    this.deleteRecordID = recordSetID;
    let decision = window.confirm("Are you Sure to Delete this record?");
    ReactDOM.findDOMNode(_this.loader).classList.remove("hide");

    if (decision) {
      fetch("http://localhost:3000/data/" + recordSetID, {
        method: "delete",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then(json => {
          _this.props.deleteRecordFromState(_this.deleteRecordID);
          alert("Record Deleted Successfully");
          ReactDOM.findDOMNode(_this.loader).classList.add("hide");
        });
    }
  }

  render() {
    let recordSet = this.props.data;
    return (
      <div className="rTableRow">
        <div className="rTableCell">{recordSet.id}</div>
        <div className="rTableCell">{recordSet.email}</div>
        <div className="rTableCell">
          <span ref="fnamePlaceHolder">
            {" "}
            {this.state.fname === "" ? recordSet.fname : this.state.fname}{" "}
          </span>
          <input
            ref="updatedFName"
            type="text"
            name="fname"
            className="hide"
            value={this.state.fname === "" ? recordSet.fname : this.state.fname}
            onChange={e => {
              this.handleChange(e);
            }}
          />
        </div>
        <div className="rTableCell">
          <span ref="lnamePlaceHolder">
            {" "}
            {this.state.lname === "" ? recordSet.lname : this.state.lname}{" "}
          </span>
          <input
            ref="updatedLName"
            type="text"
            name="lname"
            className="hide"
            value={this.state.lname === "" ? recordSet.lname : this.state.lname}
            onChange={e => {
              this.handleChange(e);
            }}
          />
        </div>
        <div className="rTableCell">
          <button
            className="btn btn-success"
            onClick={e => {
              this.toggleEdit(e, recordSet);
            }}
          >
            Edit
          </button>
          <button
            ref="cancelBtn"
            className="hide"
            onClick={e => {
              this.toggleEdit(e, recordSet);
            }}
          >
            Cancel
          </button>
        </div>
        <div className="rTableCell">
          <button
            className="btn btn-danger"
            onClick={e => {
              this.removeRecord(e, recordSet.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { updateDataInState, deleteRecordFromState }
)(RenderRows);
