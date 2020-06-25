import { combineReducers } from "redux";

const initialCalcState = {
    values: [],
    result: null
};

export const calculator = (state = initialCalcState, action) => {
    switch (action.type) {
        case "SAVE_RESULT":
            return {
                ...state,
                values: action.payload.values,
                result: action.payload.result,
            };
        case "RESET":
            return {
                ...state,
                ...initialCalcState
            };
        default:
            return state;
    }
};

export default combineReducers({
    calculator
});
