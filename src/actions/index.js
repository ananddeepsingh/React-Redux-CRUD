export const VALIDATE_USER = 'VALIDATE_USER';
export const SET_AUTHORIZED_USER = 'SET_AUTHORIZED_USER';
export const REMOVE_AUTHORIZED_USER = 'REMOVE_AUTHORIZED_USER';
export const SAVE_DB = 'DATABASE';
export const GET_DATA = 'GET_DATA';
export const UPDATE_RECORD = 'UPDATE_RECORD';
export const DELETE_RECORD = 'DELETE_RECORD';

export function validateUser(obj){
  const action = {
    type: VALIDATE_USER,
    obj
  }
  return action
}

export function saveDataInState(db){
  const action = {
    type: SAVE_DB,
    db
  }
  return action
}

export function getDataFromState(db){
  const action = {
    type: GET_DATA,
    db
  }
  return action
}

export function setAuthorizedUser(userEmailID){
  const action = {
    type: SET_AUTHORIZED_USER,
    userEmailID
  }
  return action
}

export function removeAuthorizedUser(userEmailID){
  const action = {
    type: REMOVE_AUTHORIZED_USER,
    userEmailID
  }
  return action
}


export function updateDataInState(recordID, updatedFName, updatedLName){
  const action = {
    type: UPDATE_RECORD,
    recordID,
    updatedFName,
    updatedLName
  }
  return action
}

export function deleteRecordFromState(recordID){
  const action = {
    type: DELETE_RECORD,
    recordID
  }
  return action
}