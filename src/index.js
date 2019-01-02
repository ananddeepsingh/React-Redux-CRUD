import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SIGNUP from './components/signup';
import LOGIN from './components/login';
import STUDENTLIST from "./components/studentList";
import NoMatch from './components/notFoundPage';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={LOGIN}></Route>
        <Route path="/signup" exact component={SIGNUP}></Route>
        <Route path="/student" exact component={STUDENTLIST}></Route>
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
