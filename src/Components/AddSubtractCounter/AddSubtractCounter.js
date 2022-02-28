import React, { useState } from "react";
import { connect } from "react-redux";
import { addValue, subtractValue } from "../../store/actions";

import "./AddSubtractCounter.css";

const AddSubtractCounter = ({ addAction, subtractAction }) => {
    const [value, setValue] = useState(0);

    const handleValueChange = (e) => {
        setValue(parseInt(e.target.value));
    };

    const handleAddClick = () => addAction(value);
    const handleSubtractClick = () => subtractAction(value);

    return (
        <div className="math-container">
            <input type="number" value={value} onChange={handleValueChange} />

            <div className="math-buttons">
                <button onClick={handleAddClick}>Add</button>
                <button onClick={handleSubtractClick}>Subtract</button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addAction: (value) => dispatch(addValue(value)),
        subtractAction: (value) => dispatch(subtractValue(value)),
    };
};

export default connect(null, mapDispatchToProps)(AddSubtractCounter);
