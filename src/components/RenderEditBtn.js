import React, {Component} from 'react';
import UTILS from '../sharedComponents/Utils';

class RenderEditBtn extends Component{

  toggleEdit(e, recordSet){
    e.preventDefault();
    let targetEle = e.target;
    let firstTimeuser = true;

    if(targetEle.innerText === "Edit" && firstTimeuser){
      targetEle.innerText = "Update";
      UTILS.toggleElementClass(this.refs.cancelBtn);
      firstTimeuser = false;
    }
    
    if(targetEle.innerText === "Cancel"){
      UTILS.toggleElementClass(targetEle);
      targetEle.previousElementSibling.innerText = "Edit";
    }

    UTILS.toggleElementClass(this.refs.fnamePlaceHolder);
    UTILS.toggleElementClass(this.refs.lnamePlaceHolder);
    UTILS.toggleElementClass(this.refs.updatedFName);
    UTILS.toggleElementClass(this.refs.updatedLName);

    if(targetEle.innerText === "Update" && firstTimeuser){
      let updatedFName = this.refs.updatedFName;
      let lnamePlaceHolder = this.refs.updatedLName;
      this.editFunction( recordSet,targetEle,  updatedFName, lnamePlaceHolder)
    }
  }

  render(){
    return(
      <React.Fragment>
        <button className="btn btn-success" onClick={ (e) => {this.toggleEdit(e, this.props.recordSet)}}>Edit</button>
        <button ref="cancelBtn" className="hide" onClick={ (e) => {this.toggleEdit(e, this.props.recordSet)}}>Cancel</button>
      </React.Fragment>
    )
  }
}

export default RenderEditBtn;