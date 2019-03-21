import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Store from './store.js';
import App from './App';

ReactDOM.render(<Provider store={Store}><App name="Håkon" greeting="Hello" /></Provider>, document.getElementById('app'));