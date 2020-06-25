import configureStore from "redux-mock-store";
import { saveValues } from "../../src/store/actions";

const mockStore = configureStore();
const store = mockStore();

describe("Calculator Actions", () => {
    beforeEach(() => {
        store.clearActions();
    });
    test("Sum the values and save result", () => {
        const expectedActions = [
            {
                payload: {
                    values: [1, 2, 3],
                    result: 6
                },
                type: "SAVE_RESULT"
            }
        ];
        store.dispatch(saveValues([1, 2, 3]));
        expect(store.getActions()).toEqual(expectedActions);
    });
});
