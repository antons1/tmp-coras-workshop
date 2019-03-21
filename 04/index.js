import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Store from './js/Store';
import App from './js/App';

ReactDOM.render(<Provider store={Store}><App name="Ketil" /></Provider>, document.getElementById('app'));