export const ACTION_TYPES = {
    ADD_VALUE: "ADD_VALUE",
    SUBTRACT_VALUE: "SUBTRACT_VALUE",
};

export const addValue = (amount) => {
    return {
        type: ACTION_TYPES.ADD_VALUE,
        payload: amount,
    };
};

export const subtractValue = (amount) => {
    return {
        type: ACTION_TYPES.SUBTRACT_VALUE,
        payload: amount,
    };
};
