import React from 'react';
import { connect } from 'react-redux';

import { toggleTask } from './actions';

const ListElement = ({ finished, onFinishFn, id, task }) =>
    <li>
        <input type="checkbox" checked={finished} onChange={(event) => onFinishFn(event, id)}/>
        <span className={finished ? "finished" : ""}>{task}</span>
    </li>;

export default connect((state) => ({}),
((dispatch) => ({
    onFinishFn: (event, id) => dispatch(toggleTask(event, id))
})))(ListElement);