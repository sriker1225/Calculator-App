import React from 'react';
import { connect } from 'react-redux'

const Result = (props) => {
    const { values, result } = props;
    return (
        <div className="page calculate">
            <h1>Result</h1>
            <h3>Total: {result}</h3>
            <ul>
                {values && values.map((item) => <li>{item}</li>)}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return (
        {
            values: state.calculator.values,
            result: state.calculator.result
        }
    );
};

export default connect(mapStateToProps)(Result);