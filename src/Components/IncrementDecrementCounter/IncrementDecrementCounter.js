import React from "react";
import { connect } from "react-redux";
import { addValue, subtractValue } from "../../store/actions";

import "./IncrementDecrementCounter.css";

const IncrementDecrementCounter = ({ increment, decrement }) => {
    return (
        <div className="step-container">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(addValue(1)),
        decrement: () => dispatch(subtractValue(1)),
    };
};
export default connect(null, mapDispatchToProps)(IncrementDecrementCounter);
