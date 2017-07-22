import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementIfOdd, incrementAsync } from '../actions';

class App extends Component {
    handleIncrement() {
        this.props.dispatch(increment());
    }
    handleDecrement() {
        this.props.dispatch(decrement());
    }
    handleIncrementIfOdd(){
        this.props.dispatch(incrementIfOdd());
    }
    handleIncrementAsync() {
        this.props.dispatch(incrementAsync());
    }

    render() {
        return(
            <div>
                <h1>Counter example</h1>
                <p>
                    Clicked: <input type="text" value={ this.props.counter }/> times
                    {" "}
                    <button className="increment" onClick={this.handleIncrement.bind(this) }>+</button>
                    {" "}
                    <button className="decrement" onClick={this.handleDecrement.bind(this) }>-</button>
                    {" "}
                    <button className="incrementIfOdd" onClick={this.handleIncrementIfOdd.bind(this) }>increment if odd</button>
                    {" "}
                    <button className="incrementAsync" onClick={this.handleIncrementAsync.bind(this) }>increment async</button>
                </p>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

export default connect(mapStateToProps)(App);