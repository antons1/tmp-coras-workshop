import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { addTask, inputChange, toggleTask } from './actions.js';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div>
                    {this.props.greeting} {this.props.name}!
                </div>
                <form onSubmit={this.props.addTask}>
                    <input type="text" value={this.props.currentTask} onChange={this.props.inputChange} />
                    <button onClick={this.props.addTask} type="button">Legg til</button>
                </form>
                {this.props.tasks.map((task, index) => <ListElement key={index} id={index} task={task.name} finished={task.finished} onFinishFn={this.props.toggleTask} />)}
            </div>
        )
    }
}

const ListElement = (props) =>
    <li>
        <input type="checkbox" checked={props.finished} onChange={(event) => props.onFinishFn(event, props.id)}/>
        <span className={ props.finished ? "finished" : "" }>{props.task}</span>
    </li>;

export default connect((state) => ({
    currentTask: state.currentTask,
    tasks: state.tasks
}),
(dispatch) => ({
    addTask: (event) => dispatch(addTask(event)),
    toggleTask: (event, id) => dispatch(toggleTask(event, id)),
    inputChange: (event) => dispatch(inputChange(event))
}))(App);