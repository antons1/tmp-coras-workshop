import React from 'react';
import { connect } from 'react-redux';

import { testAction } from './actions';
import Joint from './Joint';

const App = ({ test, testAction }) => <div><Joint /></div>;

export default connect((state) => ({
}), (dispatch) => ({
}))(App);