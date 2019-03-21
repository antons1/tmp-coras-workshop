import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { newTaskChanged, newTaskSubmitted, toggleTask, removeTask } from './Actions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div>Hello {this.props.name}</div>
                <form onSubmit={this.props.taskSubmitted}>
                    <input type="text" name="task" value={this.props.currentTask} onChange={this.props.currentTaskChanged} />
                    <button type="button" onClick={this.props.taskSubmitted}>Add task</button>
                </form>
                <Tasks tasks={this.props.tasks} onFinish={this.props.toggleTask} removeTask={this.props.removeTask} />
            </Fragment>
        )
    }
}

const Task = (props) =>
    <li>
        <input type="checkbox" name="finished" checked={props.finished} onChange={(e) => props.onFinish(props.name)} />
        {props.name}&nbsp;
        <a href="#" onClick={(e) => props.onDelete(props.name)}>X</a>
    </li>

const Tasks = (props) => 
    <ul>
        {props.tasks.map((task, index) => <Task key={index} {...task} onFinish={props.onFinish} onDelete={props.removeTask} />)}
    </ul>;
    
export default connect((state) => ({
    currentTask: state.todo.currentTask,
    tasks: state.todo.tasks
}), (dispatch) => ({
    currentTaskChanged: (e) => dispatch(newTaskChanged(e.target.value)),
    taskSubmitted: () => dispatch(newTaskSubmitted()),
    toggleTask: (name) => dispatch(toggleTask(name)),
    removeTask: (name) => dispatch(removeTask(name))
}))(App);