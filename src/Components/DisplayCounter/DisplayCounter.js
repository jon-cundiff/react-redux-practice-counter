import React from "react";
import { connect } from "react-redux";

const DisplayCounter = ({ count }) => {
    return (
        <div>
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
export default connect(null)(DisplayCounter);
