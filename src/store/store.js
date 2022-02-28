import { ACTION_TYPES } from "./actions";

const initialState = {
    count: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_VALUE:
            return {
                ...state,
                count: state.count + action.payload,
            };
        case ACTION_TYPES.SUBTRACT_VALUE:
            return {
                ...state,
                count: state.count - action.payload,
            };
        default:
            return state;
    }
};
