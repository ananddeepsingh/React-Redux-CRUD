import validateUser from './validateUser';
import databaseHandling from './databaseHandling';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  validateUser,
  databaseHandling
})

export default rootReducer;