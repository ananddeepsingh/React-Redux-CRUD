import { SET_AUTHORIZED_USER, REMOVE_AUTHORIZED_USER } from '../actions';

export default function setUserEmail(state = [], action){
  switch(action.type){
    case SET_AUTHORIZED_USER:
      let userEmailID = action.userEmailID;
      return userEmailID;
    case REMOVE_AUTHORIZED_USER:
      state = [];
      return state;
    default:
      return state
  }

}