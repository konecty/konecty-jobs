import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './resources/styles/globalStyle';
import Router from './container/Router';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
