import React from 'react';
import ReactDOM from 'react-dom';
// import './reset.js';
import './reset.css';
import './static/iconfont/iconfont.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
