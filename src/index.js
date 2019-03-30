import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div>Hi</div>, document.getElementById('root'));
serviceWorker.unregister();
