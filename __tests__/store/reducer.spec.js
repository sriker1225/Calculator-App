import { calculator as calculatorReducer } from "../../src/store/reducer";

describe("SAVE_RESULT", () => {
    test("returns the result and value", () => {
        const action = {
            type: "SAVE_RESULT",
            payload: { values: [1], result: 1 }
        };
        const expectedState = { values: [1], result: 1 };
        expect(calculatorReducer(undefined, action)).toEqual(expectedState);
    });
    test("when the values are empty", () => {
        const action = {
            type: "SAVE_RESULT",
            payload: { values: [], result: 0 }
        };
        const expectedState = { values: [], result: 0 };
        expect(calculatorReducer(undefined, action)).toEqual(expectedState);
    });
});
