// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, ISignup } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: ISignup.IStateProps = { 
    data: []
};

type IMapPayload = ISignup.Actions.IMapPayload;

export const SignupReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.Signup.SetReducer:
            return {
                ...state,
                ...action.payload
            };

        case ActionConsts.Signup.ResetReducer:
            return INITIAL_STATE;

        case ActionConsts.Signup.GetData :
            return {
                ...state,
                data: action.payload
            }

        default:
            return state;
    }
};
