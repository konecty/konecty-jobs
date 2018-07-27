import React from 'react';
import Main from './container/Main';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './resources/styles/globalStyle';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
