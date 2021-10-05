// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { SignupActions } from "./";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Signup action tests", () => {
    test("Map test", () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: { version: 2 },
                type: ActionConsts.Signup.SetReducer
            },
        ];

        store.dispatch(SignupActions.Map({ version: 2 }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Reset test", async () => {
        const store = mockStore({
            signup: {
                version: 1
            },
        });

        const expectedActions = [
            {
                type: ActionConsts.Signup.ResetReducer
            },
        ];

        store.dispatch(SignupActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
