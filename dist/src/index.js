import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';

ReactDOM.render(
  (<Router history={browserHistory}>
  	<Route path="/" component={App}>
  	</Route>
  </Router>),
  document.getElementById('root')
);
