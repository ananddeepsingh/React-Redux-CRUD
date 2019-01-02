import {VALIDATE_USER, SAVE_DB, UPDATE_RECORD, DELETE_RECORD} from '../actions';

export default function databaseHandling(state = [], action){
  switch(action.type){
    case SAVE_DB:
      let db = action.db;
      return db

    case VALIDATE_USER:
      let d = action.db;
      return d

    case UPDATE_RECORD:
      let updatedData = state.filter( (item) => {
        if(item.id === action.recordID){
          return item
        }
      })[0];

      updatedData['fname'] = action.updatedFName;
      updatedData['lname'] = action.updatedLName;

      return state

    case DELETE_RECORD:
      return state.filter(record => record.id !== action.recordID);

    default:
      return state
  }
}