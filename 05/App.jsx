import React, { Component, Fragment } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onFinishTask = this.onFinishTask.bind(this);

        this.state = {
            currentTask: "",
            tasks: []
        }
    }

    onInputChange(event) {
        const newTask = event.target.value;
        this.setState({ currentTask: newTask });
    }

    onSubmit(event) {
        event.preventDefault();
        const newTask = { name: this.state.currentTask, finished: false };
        this.setState({ tasks: [...this.state.tasks, newTask], currentTask: "" })
    }

    onFinishTask(event, id) {
        const tasks = this.state.tasks;
        tasks[id].finished = true;
        this.setState({ tasks: tasks });
    }

    render() {
        return(
            <div>
                <div>
                    {this.props.greeting} {this.props.name}!
                </div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.currentTask} onChange={this.onInputChange} />
                    <button onClick={this.onSubmit} type="button">Legg til</button>
                </form>
                {this.state.tasks.map((task, index) => <ListElement key={index} id={index} task={task.name} finished={task.finished} onFinishFn={this.onFinishTask} />)}
            </div>
        )
    }
}

const ListElement = (props) =>
    <li>
        <input type="checkbox" checked={props.finished} onChange={(event) => props.onFinishFn(event, props.id)}/>
        <span className="finished">{props.task}</span>
    </li>;

export default App;