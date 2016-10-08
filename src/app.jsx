import React from 'react';
import { connect } from 'react-redux';
import {Line} from 'react-chartjs';

import { fetchHello } from './actions';

class App extends React.Component {
    constructor (props) {
        super(props)
        this.onClickHello = this.onClickHello.bind(this);

        this.state = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.props.message,
                }
            ]
        }
    }
    componentWillReceiveProps(nextProp) {
        const { message } = nextProp;
        this.setState({
            datasets:[{
            data : message
            }]
        })
    }

    onClickHello() {
        this.props.dispatch(fetchHello());
    }

    render() {
        return (
            <div>
                <h1>React Sample</h1>
                <p>{this.props.message}</p>
                <Line data={this.state} width="600" height="250"/>
                <button onClick={this.onClickHello}>Hello</button>
                <div>
                    {this.props.isFetching ? 'Fetching...' : ''}
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        message: state.message,
        isFetching: state.isFetching
    };
})(App);
