import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { currentTaskInputChange, newTaskSubmitted } from './actions';
import ListElement from './ListElement';

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
                <form onSubmit={this.props.newTaskSubmitted}>
                    <input type="text" value={this.props.currentTask} onChange={this.props.currentTaskInputChange}  />
                    <button onClick={this.props.newTaskSubmitted} type="button">Legg til</button>
                </form>
                {this.props.tasks.map((task, index) => <ListElement key={index} id={index} task={task.name} finished={task.finished} />)}
            </div>
        )
    }
}

export default connect((state) => ({
    currentTask: state.currentTask,
    tasks: state.tasks
}),
((dispatch) => ({
    currentTaskInputChange: (event) => dispatch(currentTaskInputChange(event)),
    newTaskSubmitted: (event) => dispatch(newTaskSubmitted(event)),
    getInitialState: () => dispatch(getInitialState())
})))(App);