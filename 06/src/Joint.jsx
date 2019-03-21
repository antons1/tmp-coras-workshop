import React from 'react';
import { connect } from 'react-redux';
import joint from 'jointjs';

import '/node_modules/jointjs/dist/joint.css';

class Joint extends React.Component {
    constructor(props) {
        super(props);

        this.graph = new joint.dia.Graph();
        this.paper = null;
    }

    componentDidMount() {
        this.paper = new joint.dia.Paper({
            el: document.getElementById('paper'),
            model: this.graph,
            width: 600,
            height: 600,
            gridSize: 1
        });
    }

    render() {
        return (
            <div id="paper"></div>
        )
    }
}

export default connect((state) => ({}),
(dispatch) => ({}))(Joint);