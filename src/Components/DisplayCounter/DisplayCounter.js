import React from "react";
import { connect } from "react-redux";

import "./DisplayCounter.css";

const DisplayCounter = ({ count }) => {
    return (
        <div className="counter">
            <h1>Count</h1>
            <p>{count}</p>
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        count: store.count,
    };
};
export default connect(mapStateToProps)(DisplayCounter);
