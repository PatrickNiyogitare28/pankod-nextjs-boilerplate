// #region Local Imports
import { IAction, ISignup } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { SignupReducer } from ".";
// #endregion Local Imports

describe("Signup reducer", () => {
    it("should return the initial state", () => {
        expect(SignupReducer(
            undefined,
            {} as IAction<ISignup.IStateProps>)
        ).toEqual({});
    });
});
